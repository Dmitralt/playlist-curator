import {
	IResult,
	ICampaignStructure,
	IPlaybackStructure,
	IPlaylistStructure,
	IAssignation,
	IPeriodStructure
} from "../_interfaces";

import { PlaybackController } from "../playback";
import { PlaylistController } from "../playlist";

export class Includer {
	private _idGenerator: () => string;

	constructor(idGenerator: () => string) {
		this._idGenerator = idGenerator;
	}

	public include({ start, end, ...sequenceItem }: ICampaignStructure, playbacks: IPlaybackStructure[]): IResult {
		const playbackController = this._getPlaybackController({ start, end }, playbacks); //Формируем плейбекконтроллер на основе набора плейбеков и инфы про компанию
		const playlistController = this._getPlaylistController(sequenceItem); //создаем плейлистконтролер на основе.... А как, собственно?TODO: у плейлиста нет коструктора. (может добавить надо какой-то?)

		const uniquePlaylists: IPlaylistStructure[] = this._getUniquePlaylists(playbacks); //получаем уникальные плейлисты от плейбеков

		const assignation: IAssignation = this._getAssignation(uniquePlaylists, playlistController); //что тут с плейлистконтролером делаем, если  IAssignation это ид-(ид: сиквенс)

		const reaasignedPlaybacks: IPlaybackStructure[] = playbackController.reassign(assignation);

		const createdPlaylistFromEmptyPlaylist: IPlaylistStructure = playlistController.appendTo(
			/**FIXME: */ uniquePlaylists[0] /**FIXME: */
		); //FIXME: wrong argument // как должен работать аппенд? что хотим передать и что получить?
		const createdPlaybacks: IPlaybackStructure[] = playbackController.fillEmptyHours(createdPlaylistFromEmptyPlaylist);

		return {
			playbacks: [...reaasignedPlaybacks, ...createdPlaybacks],
			playlists: [createdPlaylistFromEmptyPlaylist, ...uniquePlaylists]
		};
	}

	private _getPlaylistController(sequenceItem: any): PlaylistController {
		//return new PlaylistController({ sequenceItem, idGenerator: this._idGenerator });//FIXME: что именно хотим вытянуть? Сейчас клас позволяет вытянуть масив Ид сиквенсов или ид-(ид сикванс)
		return new PlaylistController({
			sequenceItem,
			idGenerator: this._idGenerator
		});
	}

	private _getPlaybackController(period: IPeriodStructure, playbacks: IPlaybackStructure[]): PlaybackController {
		return new PlaybackController({
			period,
			playbacks,
			idGenerator: this._idGenerator
		});
	}

	private _getUniquePlaylists(playbacks: IPlaybackStructure[]): IPlaylistStructure[] {
		const uniquePlaylist: Map<string, IPlaylistStructure> = new Map();

		for (const playback of playbacks) {
			if (uniquePlaylist.has(playback.playlist._id)) continue;
			uniquePlaylist.set(playback.playlist._id, playback.playlist);
		}

		return Array.from(uniquePlaylist.values());
	}

	private _getAssignation(uniquePlaylists: IPlaylistStructure[], playlistController: PlaylistController): IAssignation {
		const assignation: IAssignation = {};

		for (const playlist of uniquePlaylists) {
			const createdPlaylist: IPlaylistStructure = playlistController.appendTo(playlist);
			assignation[playlist._id] = createdPlaylist;
		}

		return assignation;
	}
}
