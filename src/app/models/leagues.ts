import { ILeaguesResponse } from "../interfaces/leagues-response";

export class Leagues {
    id: number;
    name: string;
    country: string;

    constructor(data: ILeaguesResponse) {
        this.id = data.id
        this.name = data.league_name
        this.country = data.country_name
    }
}