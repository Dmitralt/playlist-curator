import { getEmptyPlaylist, include } from "../../sequence";

describe("Sequence test case", (): void => {
	it("empty sequence", (): void => {
		expect(getEmptyPlaylist()).toEqual([360]);
	});

	it("append to sequence", (): void => {
		expect(include({ _id: "test", duration: 5, hits: 1 }, getEmptyPlaylist())).toEqual(["test", 355]);
	});

	it("append to sequence 2 hits", (): void => {
		expect(include({ _id: "test", duration: 5, hits: 2 }, getEmptyPlaylist())).toEqual(["test", 175, "test", 175]);
	});

	it("append to sequence 3 hits", (): void => {
		expect(include({ _id: "test", duration: 5, hits: 3 }, getEmptyPlaylist())).toEqual([
			"test",
			115,
			"test",
			115,
			"test",
			115
		]);
	});

	it("append to sequence 6 hits", (): void => {
		expect(include({ _id: "test", duration: 4, hits: 6 }, getEmptyPlaylist())).toEqual([
			"test",
			56,
			"test",
			56,
			"test",
			56,
			"test",
			56,
			"test",
			56,
			"test",
			56
		]);
	});

	it("append to existent sequence with 3 empty scopes 2 hits", (): void => {
		expect(include({ _id: "test2", duration: 5, hits: 2 }, ["test", 115, "test", 115, "test", 115])).toEqual([
			"test",
			115,
			"test",
			"test2",
			110,
			"test",
			"test2",
			110
		]);
	});

	it("append to existent sequence with 4 empty scopes 2 hits", (): void => {
		expect(include({ _id: "test2", duration: 5, hits: 2 }, ["test", 85, "test", 85, "test", 85, "test", 85])).toEqual([
			"test",
			85,
			"test",
			"test2",
			80,
			"test",
			85,
			"test",
			"test2",
			80
		]);
	});

	it("append to sequence with 6 empty scopes 2 hits", (): void => {
		expect(
			include({ _id: "test2", duration: 10, hits: 2 }, [
				"test",
				56,
				"test",
				56,
				"test",
				56,
				"test",
				56,
				"test",
				56,
				"test",
				56
			])
		).toEqual(["test", 56, "test", 56, "test", "test2", 46, "test", 56, "test", 56, "test", "test2", 46]);
	});

	// FIXME:
	xit("append to sequence with 6 empty scopes 7 hits", (): void => {
		expect(
			include({ _id: "test2", duration: 8, hits: 7 }, [
				"test",
				56,
				"test",
				56,
				"test",
				56,
				"test",
				56,
				"test",
				56,
				"test",
				56
			])
		).toEqual([]);
	});
});
