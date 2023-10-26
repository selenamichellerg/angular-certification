import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { Leagues } from '@models/leagues';
import { ILeaguesResponse } from '@interfaces/leagues-response';
import { environment } from '@environment/environment';
import { IAPIResponse } from '@interfaces/api-response';
import { Standing } from '@models/standing';
import { IStandingsResponse } from '@interfaces/standings-response';
import { IFixtureResponse } from '@interfaces/fixture-response';
import { Fixture } from '@models/fixture';
import { IApiFixturesResponse } from '@interfaces/api-fixtures-response';

@Injectable({
	providedIn: 'root'
})
export class FootballService {

	mockLeaguesList = [
		{
			id: 39,
			league_name: "Premier League",
			country_name: "england"
		},
		{
			id: 107,
			league_name: "La Liga",
			country_name: "spain"
		},
		{
			id: 61,
			league_name: "Ligue 1",
			country_name: "france"
		},
		{
			id: 78,
			league_name: "Bundesliga",
			country_name: "germany"
		},
		{
			id: 71,
			league_name: "Serie A",
			country_name: "italy"
		}
	]

	constructor(private httpClient: HttpClient) { }

	getLeagues(): Observable<Leagues[]> {
		const mapResponseToLeaguesList = (response: ILeaguesResponse[]) => {
			return response.map((l) => new Leagues (l))
		}
		return of(this.mockLeaguesList).pipe(map(mapResponseToLeaguesList))
	}

	getStandings(
		league: number,
		season: number
	): Observable<Standing[]> {
		let headers = new HttpHeaders();
		headers = headers.append('x-rapidapi-key', `${environment.KEY}`);
		headers = headers.append('x-rapidapi-host', 'v3.football.api-sports.io');

		const mapResponseToStandings = (response: IAPIResponse)  => {
			const mapResponse = (stand: IStandingsResponse) => {
				return new Standing(stand);
			}
            return response?.response[0]?.league.standings[0].map(mapResponse)
		}

		return this.httpClient
		.get<IAPIResponse>(
			`${environment.API}/standings?league=${league}&season=${season}`,
			{ headers: headers})
		.pipe(map(mapResponseToStandings))
  	}

	getFixtures(teamId: string, last: number): Observable<Fixture[]> {
		let headers = new HttpHeaders();
		headers = headers.append('x-rapidapi-key', `${environment.KEY}`);
		headers = headers.append('x-rapidapi-host', 'v3.football.api-sports.io');

		const mapResponseToFixtures = (response: IApiFixturesResponse) => {
			const mapResponse = (teams: IFixtureResponse) => {
				return new Fixture(teams.teams, teams.goals)
			}
			return response?.response?.map(mapResponse)
		}

		return this.httpClient
		.get<IApiFixturesResponse>(
			`${environment.API}/fixtures?team=${teamId}&last=${last}`,
			{ headers: headers})
		.pipe(map(mapResponseToFixtures))
	}
}
