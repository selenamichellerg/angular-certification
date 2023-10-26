import { IGoalsResponse } from "./goals-response";
import { ITeamsResponse } from "./teams-response";

export interface IFixtureResponse {
    "fixture": object,
    "league": object,
    "teams": ITeamsResponse,
    "goals": IGoalsResponse,
    "score": object 
}