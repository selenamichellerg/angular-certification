import { ILeagueSeasonResponse } from "./league-season-response"

export interface IAPIResponse {
    "get": string,
    "parameters": object
    "errors": [],
    "results": number,
    "paging": object,
    "response": ILeagueSeasonResponse[]
}