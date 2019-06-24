import moment from "moment";
import { IPeriodStructure, IPlaybackStructure, IPlaylistStructure, IAssignation } from "../_interfaces";

export class PlaybackController {
	private _idGenerator: () => string;
	private readonly _period: IPeriodStructure; //TODO: спросить как тестировать приватные поля
	private readonly _originPlaybacks: IPlaybackStructure[];

	constructor(props: { period: IPeriodStructure; playbacks: IPlaybackStructure[]; idGenerator: () => string }) {
		this._period = props.period;
		this._originPlaybacks = props.playbacks;
		this._idGenerator = props.idGenerator;
	}

	public fillEmptyHours(playlist: IPlaylistStructure): IPlaybackStructure[] {
		//заполняем плейбеками отсутствующие часы
		const createdPlaybacks = [];
		let DataARR = [];
		for (let i in this._originPlaybacks) {
			//записываем даты которые есть(они приходят в юникс формате)
			DataARR.push(this._originPlaybacks[i].date);
		}
		for (
			let count = moment.unix(this._period.start);
			count < moment.unix(this._period.end);
			count.add(1, "hours") //по часу проходим от старта до конца
		) {
			if (DataARR.indexOf(count.unix()) == -1) {
				//если нужного часа нет в массиве с существующими часами, создаем плейбек с пустым листом
				let IpbStruct: IPlaybackStructure = {
					_id: this._idGenerator(),
					zone: "Test Zone",
					date: count.unix(),
					playlist
				};
				createdPlaybacks.push(IpbStruct);
			}
		}

		return createdPlaybacks;
	}

	public reassign(assignation: IAssignation): IPlaybackStructure[] {
		const updatedPlaybacks: IPlaybackStructure[] = [];

		for (const playback of this._originPlaybacks) {
			const currentPlaylistId: string = playback.playlist._id;
			const reassignedPlaylist = assignation[currentPlaylistId];
			if (!reassignedPlaylist) continue; //если его там нет, то прерываем.  Если он там есть, то в апдейтедплейбеки впихиваем плейлист из ассигнейшина
			updatedPlaybacks.push({
				_id: playback._id,
				zone: playback.zone,
				date: playback.date,
				playlist: reassignedPlaylist
			});
		}

		return updatedPlaybacks;
	}
}
