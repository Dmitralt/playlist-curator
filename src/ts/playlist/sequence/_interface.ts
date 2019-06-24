export type ISequence = (string | number)[];

export const _EMPTY_PLAYLIST = [360];

export interface ISequenceItem {
	_id: string;
	duration: number;
	hits: number;
}
