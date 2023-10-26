import { IFixtureResponse } from "./fixture-response"

export interface IApiFixturesResponse {
    "get": string,
    "parameters": object
    "errors": [],
    "results": number,
    "paging": object,
    "response": IFixtureResponse[]
}