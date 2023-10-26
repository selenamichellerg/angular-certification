import { IStandingsResponse } from "@interfaces/standings-response";

export class Standing {
    logo: string
    name: string
    games: number
    wins: number
    losses: number
    draws: number
    goalDifference: number
    points: number
    teamId: number

    constructor(data: IStandingsResponse) {
        console.log(data)
        this.logo = data.team.logo
        this.name = data.team.name
        this.games = data.all.played
        this.wins = data.all.win
        this.losses = data.all.lose
        this.draws = data.all.draw
        this.goalDifference = data.goalsDiff
        this.points = data.points
        this.teamId = data.team.id
    }
}