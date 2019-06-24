import { ISequence, ISequenceItem, _EMPTY_PLAYLIST } from "./_interface";
export { ISequence, ISequenceItem };

import { Checker } from "./checker";
import { include } from "./includer";
import { exclude } from "./excluder";

export const SequenceChecker = Checker;
export { include, exclude };

export function getEmptyPlaylist(): number[] {
	return _EMPTY_PLAYLIST;
}
