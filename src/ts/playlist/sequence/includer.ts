import { ISequence, ISequenceItem, _EMPTY_PLAYLIST } from "./_interface";

export function include({ _id, duration, hits }: ISequenceItem, sequence: ISequence = _EMPTY_PLAYLIST): ISequence {
	const result: ISequence = [];

	const emptyScopes: number = sequence.reduce<number>(
		(memo: number, place: number | string): number => (typeof place === "number" ? memo + 1 : memo),
		0
	);

	const emptyBlockSum: number = sequence.reduce<number>(
		(memo: number, place: number | string): number => (typeof place === "number" ? memo + place : memo),
		0
	);

	let isNowAppend: number = (emptyBlockSum - duration * hits) / hits;

	for (const index in sequence) {
		const place = sequence[index];
		if (typeof place === "string") {
			result.push(place);
			continue;
		}

		isNowAppend = isNowAppend - place;

		if (Math.round(isNowAppend) - duration < 0 || Number(index) + 1 === sequence.length) {
			let step: number = 1;

			if (emptyScopes < hits) step = hits / emptyScopes;
			else if (emptyBlockSum < 1) step = place / ((duration * hits) / emptyScopes);

			result.push(...spread({ _id, duration, hits: step }, place));
			isNowAppend = (emptyBlockSum - duration * hits) / hits;

			// FIXME:
			if (emptyScopes < hits) isNowAppend += result[result.length - 1] as number;
		} else {
			result.push(place);
		}
	}

	return result;
}

function spread({ _id, duration, hits }: ISequenceItem, sequence: number): ISequence {
	const result: ISequence = [];

	for (let hitsLeft = hits; hitsLeft > 0; hitsLeft--) {
		result.push(_id);
		result.push(sequence / hits - duration);
	}

	return result;
}

// function 