import { _EMPTY_PLAYLIST } from "../sequence/_interface";
import { PlaylistController } from "../index";
import { ISequenceItem } from "../sequence";
import { IPlaylistStructure } from "../../_interfaces";

describe("Sequence Checker test case", (): void => {
	let IsequenceTest: ISequenceItem = { _id: "id1", duration: 1, hits: 2 };
	let playlistController = new PlaylistController({ sequenceItem: IsequenceTest, idGenerator: () => "id" });

	const Iplaylist1: IPlaylistStructure = { _id: "unik1", sequence: ["1", 358, "1"] };
	const Iplaylist2: IPlaylistStructure = { _id: "unik2", sequence: ["2", 358, "2"] };
	const Iplaylist3: IPlaylistStructure = { _id: "unik2", sequence: ["3", 358, "3"] };

	it("Test newPlaylist", (): void => {
		const createdPlaylist = playlistController.appendTo(Iplaylist1);
		expect(createdPlaylist.sequence).toEqual(["1", "id1", 178, "id1", 178, "1"]); 
    });
    
	xit("Test createdPlaylists", (): void => {
		expect(playlistController.appendTo(Iplaylist2)).toEqual("");
	});
});
