import { campaign, playbacks } from "./structures";
import { PlaylistCurator } from "../../ts";

const mockIdGenerator = (): string => {
	return Math.random().toString();
};

describe(" Curator test case", (): void => {
	const curator = new PlaylistCurator({ idGenerator: mockIdGenerator });

	it("Include", (): void => {
		const { playlists: createdPlaylists, playbacks: createdPlaybacks } = curator.include(campaign, playbacks);
		expect(createdPlaylists.length).toBe(3);
		expect(createdPlaybacks.length).toBe(6);
	});
});
