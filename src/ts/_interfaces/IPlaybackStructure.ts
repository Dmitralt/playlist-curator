import { IPlaylistStructure } from "./IPlaylistStructure";

export interface IPlaybackStructure {
	_id: string;
	zone?: string;
	date: number;
	playlist: IPlaylistStructure;
}
