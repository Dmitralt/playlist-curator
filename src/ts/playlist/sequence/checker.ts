import { ISequence } from "./_interface";

interface IProps {
	duration: number;
	hits: number;
}

export class Checker {
	private _duration: number;
	private _hits: number;
	private _summaryDuration: number;

	constructor({ duration, hits }: IProps) {
		this._duration = duration;
		this._hits = hits;
		this._summaryDuration = duration * hits;
	}

	public check(sequence: ISequence): boolean {
		let sumEmptyness = 0;
		let countLargeThenEmptyness = 0;

		for (const item of sequence) {
			if (typeof item == "string") continue;
			sumEmptyness += item;
			countLargeThenEmptyness += Math.floor(item / this._duration);
		}

		return sumEmptyness > this._summaryDuration && countLargeThenEmptyness > this._hits;
	}
}
