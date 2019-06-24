import { IProps, IResult, ICampaignStructure, IPlaybackStructure } from "./_interfaces";

import { Includer } from "./includer";
import { Excluder } from "./excluder";

export class PlaylistCurator {
	private _idGenerator: () => string;

	constructor(props: IProps) {
		this._idGenerator = props.idGenerator;
	}

	public include(campaign: ICampaignStructure, playbacks: IPlaybackStructure[]): IResult {
		const includer = new Includer(this._idGenerator);
		return includer.include(campaign, playbacks);
	}

	public exclude(campaign: ICampaignStructure, playbacks: IPlaybackStructure[]): IResult {
		const excluder = new Excluder(this._idGenerator);
		return excluder.exclude(campaign, playbacks);
	}
}
