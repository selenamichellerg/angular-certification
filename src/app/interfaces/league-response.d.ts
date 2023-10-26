import { IStandingsResponse } from "./standings-response";

export interface ILeagueResponse {
    "id": number,
    "name": string,
    "country": string,
    "logo": string,
    "flag": string,
    "season": number,
    "standings": [IStandingsResponse[]]
}