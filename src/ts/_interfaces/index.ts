export { ISequenceStructure, _EMPTY_PLAYLIST } from "./ISequenceStructure";
import { IPlaylistStructure } from "./IPlaylistStructure";
import { IPlaybackStructure } from "./IPlaybackStructure";
export { ICampaignStructure } from "./ICampaignStructure";
export { IPeriodStructure } from "./IPeriodStructure";
export { IAssignation } from "./IAssignation";

export { IPlaylistStructure, IPlaybackStructure };

export interface IProps {
    idGenerator(): string;
}

export interface IResult {
    playbacks: IPlaybackStructure[];
    playlists: IPlaylistStructure[];
}