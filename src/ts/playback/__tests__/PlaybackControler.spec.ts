import moment from "moment";
import { IPeriodStructure, IPlaybackStructure, IPlaylistStructure, IAssignation } from "../../_interfaces";
import { PlaybackController } from "../PlaybackController";

const period: IPeriodStructure = {
	start: moment("20 june 2019 12:00:00", "DD MMMM YYYY HH:mm:ss").unix(),
	end: moment("20 june 2019 16:00:00", "DD MMMM YYYY HH:mm:ss").unix()
};

const playlist: IPlaylistStructure = { _id: "unik1", sequence: [] };
const playlist2: IPlaylistStructure = { _id: "unik2", sequence: [] };

const playbacks: IPlaybackStructure[] = [
	{
		_id: "myid",
		zone: "Test Zone",
		date: moment("20 june 2019 14:00:00", "DD MMMM YYYY HH:mm:ss").unix(),
		playlist
	}
];

describe("PlaybackController test case", (): void => {
	const playbackController = new PlaybackController({
		period,
		playbacks,
		idGenerator: (): string => "blabla"
	});
	const testAssignation: IAssignation = { unik1: playlist2 };

	it("Reaasign method", (): void => {
		const reassignedPlaybacks: IPlaybackStructure[] = playbackController.reassign(testAssignation);
		expect(reassignedPlaybacks.length).toBe(playbacks.length);

		const reaasignedPlayback = reassignedPlaybacks[0];
		expect(reaasignedPlayback._id).toBe(playbacks[0]._id);
		expect(reaasignedPlayback.playlist._id).toBe(playlist2._id);
	});

	it("missed Playbacks test. 'fillEmptyHours' method", (): void => {
		const createdPlaybacks: IPlaybackStructure[] = playbackController.fillEmptyHours(playlist2); //12 13 14 15 нашы часы. плейбек есть только на 14
		const expectedDates = ["2019-06-20 12", "2019-06-20 13", "2019-06-20 15"];
		for (const index in createdPlaybacks) {
			const playback = createdPlaybacks[index];
			expect(moment.unix(playback.date).format("YYYY-MM-DD HH")).toEqual(expectedDates[index]);
		}
	});
});
