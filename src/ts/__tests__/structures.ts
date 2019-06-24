import moment from "moment";

export const playlist = {
	_id: "playlist1",
	sequence: [360]
};

export const playlist2 = {
	_id: "playlist2",
	sequence: ["someCampaign", 350]
};

export const playbacks = [
	{
		_id: "playback1",
		date: moment("20 june 2019 13:00:00", "DD MMMM YYYY HH:mm:ss").unix(),
		playlist: playlist
	},
	{
		_id: "playback2",
		date: moment("20 june 2019 14:00:00", "DD MMMM YYYY HH:mm:ss").unix(),
		playlist: playlist
	},
	{
		_id: "playback3",
		date: moment("20 june 2019 15:00:00", "DD MMMM YYYY HH:mm:ss").unix(),
		playlist: playlist2
	},
	{
		_id: "playback4",
		date: moment("20 june 2019 16:00:00", "DD MMMM YYYY HH:mm:ss").unix(),
		playlist: playlist
	}
];

export const playlist3 = {
	_id: "playlist3",
	sequence: [] // modified "playlist1"
};

export const playlist4 = {
	_id: "playlist4",
	sequence: [] // modified "playlist2"
};

export const mapping = {
	playlist1: "playlist3",
	playlist2: "playlist4"
};

export const reassignedPlaybacks = [
	{
		_id: "playback1",
		date: moment("20 june 2019 13:00:00", "DD MMMM YYYY HH:mm:ss").unix(),
		playlist: playlist3
	},
	{
		_id: "playback2",
		date: moment("20 june 2019 14:00:00", "DD MMMM YYYY HH:mm:ss").unix(),
		playlist: playlist3
	},
	{
		_id: "playback4",
		date: moment("20 june 2019 16:00:00", "DD MMMM YYYY HH:mm:ss").unix(),
		playlist: playlist3
	}
];

export const campaign = {
	_id: "campaign1",
	start: moment("20 june 2019 12:00:00", "DD MMMM YYYY HH:mm:ss").unix(),
	end: moment("20 june 2019 18:00:00", "DD MMMM YYYY HH:mm:ss").unix(),
	duration: 2,
	hits: 10
};

export const createdPlaylist: any[] = [
	"campaign1",
	34,
	"campaign1",
	34,
	"campaign1",
	34,
	"campaign1",
	34,
	"campaign1",
	34,
	"campaign1",
	34,
	"campaign1",
	34,
	"campaign1",
	34,
	"campaign1",
	34,
	"campaign1",
	34
];

export const newPlaybacks = [
	{
		_id: "playback5",
		date: moment("20 june 2019 12:00:00", "DD MMMM YYYY HH:mm:ss").unix(),
		playlist: {
			_id: "createdPlaylist",
			sequence: createdPlaylist
		}
	},
	{
		_id: "playback5",
		date: moment("20 june 2019 15:00:00", "DD MMMM YYYY HH:mm:ss").unix(),
		playlist: {
			_id: "createdPlaylist",
			sequence: createdPlaylist
		}
	},
	{
		_id: "playback9",
		date: moment("20 june 2019 17:00:00", "DD MMMM YYYY HH:mm:ss").unix(),
		playlist: {
			_id: "createdPlaylist",
			sequence: createdPlaylist
		}
	}
];
