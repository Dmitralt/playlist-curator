// //import { ICampaignStructure } from "src/ts/entities/campaign";
// import { ICampaignStructure } from "../_interfaces"
// //import { IPlaybackStructure } from "src/ts/entities/playback";
// import { IPlaybackStructure } from "../_interfaces"
// import {IAssignation} from "../_interfaces/IAssignation"
// import { PlaybackController } from "../playback/controller";
// import { PlaylistController } from "./../playlist";
// import { IPlaylistStructure } from "../_interfaces";

// export class StructureIncluder {
// 	public static include({ campaign, originPlaybacks }: { campaign: ICampaignStructure; originPlaybacks: IPlaybackStructure[] }) {
// 		const { start, end } = campaign;
// 		const period = { start, end };
// 		//FIXME: playbackController должен быть PlaybackController класом. Обязательно проверить чтоб так было!!!
// 		//TODO: -так и есть
// 		const { playbackController, uniquePlaylists } = PlaybackController.createControllerAndGetUniquePlaylists({ period, originPlaybacks });
// 		const playlistResult = PlaylistController.include(campaign, uniquePlaylists);

// 		const { assignation, createdPlaylists, newPlaylist } = playlistResult;

// 		const { createdPlaybacks, updatedPlaybacks } = StructureIncluder._playbackControllerHandle(
// 			playbackController,
// 			newPlaylist,
// 			assignation
// 		);

// 		return {
// 			createdPlaylists,
// 			createdPlaybacks,
// 			updatedPlaybacks
// 		};
// 	}

// 	private static _playbackControllerHandle(playbackController:PlaybackController, newPlaylist:IPlaylistStructure, assignation:IAssignation) //TODO: any is bad
// 	{
// 		//playbackController.fillEmptyHours(newPlaylist);
// 		playbackController.fillEmptyHours();
// 		playbackController.reassign(assignation);

// 		return playbackController.getResult();
// 	}
// }

export { Includer } from "./Includer";
