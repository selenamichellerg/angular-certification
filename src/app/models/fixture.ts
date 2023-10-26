import { IGoalsResponse } from "@interfaces/goals-response"
import { ITeamsResponse } from "@interfaces/teams-response"

export class Fixture {
    homeTeam: string
    homeLogo: string
    homegoals: number
    awayTeam: string
    awayLogo: string
    awaygoals: number

    constructor(dataTeams: ITeamsResponse, dataGoals: IGoalsResponse) {
        this.homeTeam  = dataTeams.home.name
        this.homeLogo =  dataTeams.home.logo
        this.homegoals = dataGoals.home
        this.awayTeam =  dataTeams.away.name
        this.awayLogo = dataTeams.away.logo
        this.awaygoals = dataGoals.away
    }
}