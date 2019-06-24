import { ISequence } from "../sequence";

export function exclude({ _id, duration }: any, sequence: ISequence): ISequence {
	const result: ISequence = [];

	for (const index in sequence) {
		const item = sequence[index];

		if (item !== _id) {
			result.push(item);
			continue;
		}

		const lastIndex = result.length - 1;
		const lastItem = result[lastIndex];

		if (typeof lastItem === "number") {
			result[lastIndex] = lastItem + duration;
		} else {
			result.push(duration);
		}
	}

	return result;
}
