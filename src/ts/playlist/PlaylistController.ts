import { IPlaylistStructure } from "../_interfaces";
import * as Sequence from "./sequence";

export class PlaylistController {
	private _sequenceItem: Sequence.ISequenceItem;
	private _idGenerator: () => string;

	constructor({ sequenceItem, idGenerator }: { sequenceItem: Sequence.ISequenceItem; idGenerator: () => string }) {
		this._sequenceItem = sequenceItem;
		this._idGenerator = idGenerator;
	}

	public appendTo(playlist: IPlaylistStructure): IPlaylistStructure {
		const sequence = Sequence.include(this._sequenceItem, playlist.sequence); // правильно ли оно работает, потому что в сиквенсе там ФИКСМИ
		const newId = this._idGenerator();

		return {
			_id: newId,
			sequence
		};
	}

	public removeFrom(playlist: IPlaylistStructure): IPlaylistStructure {
		const sequence = Sequence.exclude(this._sequenceItem, playlist.sequence);
		const newId = this._idGenerator();

		return {
			_id: newId,
			sequence
		};
	}
}
