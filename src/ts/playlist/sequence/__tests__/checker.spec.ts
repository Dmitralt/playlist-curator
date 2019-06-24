import { _EMPTY_PLAYLIST } from "../_interface";
import { Checker } from "../checker";

describe("Sequence Checker test case", (): void => {
	const checker = new Checker({ duration: 2, hits: 10 });

	it("First", (): void => {
		expect(checker.check(_EMPTY_PLAYLIST)).toBeTruthy();
	});
});
