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

	mockFixture:IApiFixturesResponse  = {
		"get": "fixtures",
		"parameters": {
			"team": "50",
			"last": "10"
		},
		"errors": [],
		"results": 10,
		"paging": {
			"current": 1,
			"total": 1
		},
		"response": [
			{
				"fixture": {
					"id": 1126190,
					"referee": "Morten Krogh, Denmark",
					"timezone": "UTC",
					"date": "2023-10-25T19:00:00+00:00",
					"timestamp": 1698260400,
					"periods": {
						"first": 1698260400,
						"second": 1698264000
					},
					"venue": {
						"id": 10500,
						"name": "Stadion Wankdorf",
						"city": "Bern"
					},
					"status": {
						"long": "Match Finished",
						"short": "FT",
						"elapsed": 90
					}
				},
				"league": {
					"id": 2,
					"name": "UEFA Champions League",
					"country": "World",
					"logo": "https://media-4.api-sports.io/football/leagues/2.png",
					"flag": null,
					"season": 2023,
					"round": "Group G - 3"
				},
				"teams": {
					"home": {
						"id": 565,
						"name": "BSC Young Boys",
						"logo": "https://media-4.api-sports.io/football/teams/565.png",
						"winner": false
					},
					"away": {
						"id": 50,
						"name": "Manchester City",
						"logo": "https://media-4.api-sports.io/football/teams/50.png",
						"winner": true
					}
				},
				"goals": {
					"home": 1,
					"away": 3
				},
				"score": {
					"halftime": {
						"home": 0,
						"away": 0
					},
					"fulltime": {
						"home": 1,
						"away": 3
					},
					"extratime": {
						"home": null,
						"away": null
					},
					"penalty": {
						"home": null,
						"away": null
					}
				}
			},
			{
				"fixture": {
					"id": 1035122,
					"referee": "R. Jones",
					"timezone": "UTC",
					"date": "2023-10-21T14:00:00+00:00",
					"timestamp": 1697896800,
					"periods": {
						"first": 1697896800,
						"second": 1697900400
					},
					"venue": {
						"id": 555,
						"name": "Etihad Stadium",
						"city": "Manchester"
					},
					"status": {
						"long": "Match Finished",
						"short": "FT",
						"elapsed": 90
					}
				},
				"league": {
					"id": 39,
					"name": "Premier League",
					"country": "England",
					"logo": "https://media-4.api-sports.io/football/leagues/39.png",
					"flag": "https://media-4.api-sports.io/flags/gb.svg",
					"season": 2023,
					"round": "Regular Season - 9"
				},
				"teams": {
					"home": {
						"id": 50,
						"name": "Manchester City",
						"logo": "https://media-4.api-sports.io/football/teams/50.png",
						"winner": true
					},
					"away": {
						"id": 51,
						"name": "Brighton",
						"logo": "https://media-4.api-sports.io/football/teams/51.png",
						"winner": false
					}
				},
				"goals": {
					"home": 2,
					"away": 1
				},
				"score": {
					"halftime": {
						"home": 2,
						"away": 0
					},
					"fulltime": {
						"home": 2,
						"away": 1
					},
					"extratime": {
						"home": null,
						"away": null
					},
					"penalty": {
						"home": null,
						"away": null
					}
				}
			},
			{
				"fixture": {
					"id": 1035107,
					"referee": "M. Oliver",
					"timezone": "UTC",
					"date": "2023-10-08T15:30:00+00:00",
					"timestamp": 1696779000,
					"periods": {
						"first": 1696779000,
						"second": 1696782600
					},
					"venue": {
						"id": 494,
						"name": "Emirates Stadium",
						"city": "London"
					},
					"status": {
						"long": "Match Finished",
						"short": "FT",
						"elapsed": 90
					}
				},
				"league": {
					"id": 39,
					"name": "Premier League",
					"country": "England",
					"logo": "https://media-4.api-sports.io/football/leagues/39.png",
					"flag": "https://media-4.api-sports.io/flags/gb.svg",
					"season": 2023,
					"round": "Regular Season - 8"
				},
				"teams": {
					"home": {
						"id": 42,
						"name": "Arsenal",
						"logo": "https://media-4.api-sports.io/football/teams/42.png",
						"winner": true
					},
					"away": {
						"id": 50,
						"name": "Manchester City",
						"logo": "https://media-4.api-sports.io/football/teams/50.png",
						"winner": false
					}
				},
				"goals": {
					"home": 1,
					"away": 0
				},
				"score": {
					"halftime": {
						"home": 0,
						"away": 0
					},
					"fulltime": {
						"home": 1,
						"away": 0
					},
					"extratime": {
						"home": null,
						"away": null
					},
					"penalty": {
						"home": null,
						"away": null
					}
				}
			},
			{
				"fixture": {
					"id": 1126173,
					"referee": "Artur Soares Dias",
					"timezone": "UTC",
					"date": "2023-10-04T19:00:00+00:00",
					"timestamp": 1696446000,
					"periods": {
						"first": 1696446000,
						"second": 1696449600
					},
					"venue": {
						"id": 738,
						"name": "Red Bull Arena",
						"city": "Leipzig"
					},
					"status": {
						"long": "Match Finished",
						"short": "FT",
						"elapsed": 90
					}
				},
				"league": {
					"id": 2,
					"name": "UEFA Champions League",
					"country": "World",
					"logo": "https://media-4.api-sports.io/football/leagues/2.png",
					"flag": null,
					"season": 2023,
					"round": "Group G - 2"
				},
				"teams": {
					"home": {
						"id": 173,
						"name": "RB Leipzig",
						"logo": "https://media-4.api-sports.io/football/teams/173.png",
						"winner": false
					},
					"away": {
						"id": 50,
						"name": "Manchester City",
						"logo": "https://media-4.api-sports.io/football/teams/50.png",
						"winner": true
					}
				},
				"goals": {
					"home": 1,
					"away": 3
				},
				"score": {
					"halftime": {
						"home": 0,
						"away": 1
					},
					"fulltime": {
						"home": 1,
						"away": 3
					},
					"extratime": {
						"home": null,
						"away": null
					},
					"penalty": {
						"home": null,
						"away": null
					}
				}
			},
			{
				"fixture": {
					"id": 1035106,
					"referee": "C. Pawson",
					"timezone": "UTC",
					"date": "2023-09-30T14:00:00+00:00",
					"timestamp": 1696082400,
					"periods": {
						"first": 1696082400,
						"second": 1696086000
					},
					"venue": {
						"id": 600,
						"name": "Molineux Stadium",
						"city": "Wolverhampton, West Midlands"
					},
					"status": {
						"long": "Match Finished",
						"short": "FT",
						"elapsed": 90
					}
				},
				"league": {
					"id": 39,
					"name": "Premier League",
					"country": "England",
					"logo": "https://media-4.api-sports.io/football/leagues/39.png",
					"flag": "https://media-4.api-sports.io/flags/gb.svg",
					"season": 2023,
					"round": "Regular Season - 7"
				},
				"teams": {
					"home": {
						"id": 39,
						"name": "Wolves",
						"logo": "https://media-4.api-sports.io/football/teams/39.png",
						"winner": true
					},
					"away": {
						"id": 50,
						"name": "Manchester City",
						"logo": "https://media-4.api-sports.io/football/teams/50.png",
						"winner": false
					}
				},
				"goals": {
					"home": 2,
					"away": 1
				},
				"score": {
					"halftime": {
						"home": 1,
						"away": 0
					},
					"fulltime": {
						"home": 2,
						"away": 1
					},
					"extratime": {
						"home": null,
						"away": null
					},
					"penalty": {
						"home": null,
						"away": null
					}
				}
			},
			{
				"fixture": {
					"id": 1125712,
					"referee": "C. Kavanagh",
					"timezone": "UTC",
					"date": "2023-09-27T19:00:00+00:00",
					"timestamp": 1695841200,
					"periods": {
						"first": 1695841200,
						"second": 1695844800
					},
					"venue": {
						"id": 562,
						"name": "St. James' Park",
						"city": "Newcastle upon Tyne"
					},
					"status": {
						"long": "Match Finished",
						"short": "FT",
						"elapsed": 90
					}
				},
				"league": {
					"id": 48,
					"name": "League Cup",
					"country": "England",
					"logo": "https://media-4.api-sports.io/football/leagues/48.png",
					"flag": "https://media-4.api-sports.io/flags/gb.svg",
					"season": 2023,
					"round": "3rd Round"
				},
				"teams": {
					"home": {
						"id": 34,
						"name": "Newcastle",
						"logo": "https://media-4.api-sports.io/football/teams/34.png",
						"winner": true
					},
					"away": {
						"id": 50,
						"name": "Manchester City",
						"logo": "https://media-4.api-sports.io/football/teams/50.png",
						"winner": false
					}
				},
				"goals": {
					"home": 1,
					"away": 0
				},
				"score": {
					"halftime": {
						"home": 0,
						"away": 0
					},
					"fulltime": {
						"home": 1,
						"away": 0
					},
					"extratime": {
						"home": null,
						"away": null
					},
					"penalty": {
						"home": null,
						"away": null
					}
				}
			},
			{
				"fixture": {
					"id": 1035095,
					"referee": "A. Taylor",
					"timezone": "UTC",
					"date": "2023-09-23T14:00:00+00:00",
					"timestamp": 1695477600,
					"periods": {
						"first": 1695477600,
						"second": 1695481200
					},
					"venue": {
						"id": 555,
						"name": "Etihad Stadium",
						"city": "Manchester"
					},
					"status": {
						"long": "Match Finished",
						"short": "FT",
						"elapsed": 90
					}
				},
				"league": {
					"id": 39,
					"name": "Premier League",
					"country": "England",
					"logo": "https://media-4.api-sports.io/football/leagues/39.png",
					"flag": "https://media-4.api-sports.io/flags/gb.svg",
					"season": 2023,
					"round": "Regular Season - 6"
				},
				"teams": {
					"home": {
						"id": 50,
						"name": "Manchester City",
						"logo": "https://media-4.api-sports.io/football/teams/50.png",
						"winner": true
					},
					"away": {
						"id": 65,
						"name": "Nottingham Forest",
						"logo": "https://media-4.api-sports.io/football/teams/65.png",
						"winner": false
					}
				},
				"goals": {
					"home": 2,
					"away": 0
				},
				"score": {
					"halftime": {
						"home": 2,
						"away": 0
					},
					"fulltime": {
						"home": 2,
						"away": 0
					},
					"extratime": {
						"home": null,
						"away": null
					},
					"penalty": {
						"home": null,
						"away": null
					}
				}
			},
			{
				"fixture": {
					"id": 1126149,
					"referee": "João Pedro Pinheiro",
					"timezone": "UTC",
					"date": "2023-09-19T19:00:00+00:00",
					"timestamp": 1695150000,
					"periods": {
						"first": 1695150000,
						"second": 1695153600
					},
					"venue": {
						"id": 555,
						"name": "Etihad Stadium",
						"city": "Manchester"
					},
					"status": {
						"long": "Match Finished",
						"short": "FT",
						"elapsed": 90
					}
				},
				"league": {
					"id": 2,
					"name": "UEFA Champions League",
					"country": "World",
					"logo": "https://media-4.api-sports.io/football/leagues/2.png",
					"flag": null,
					"season": 2023,
					"round": "Group G - 1"
				},
				"teams": {
					"home": {
						"id": 50,
						"name": "Manchester City",
						"logo": "https://media-4.api-sports.io/football/teams/50.png",
						"winner": true
					},
					"away": {
						"id": 598,
						"name": "FK Crvena Zvezda",
						"logo": "https://media-4.api-sports.io/football/teams/598.png",
						"winner": false
					}
				},
				"goals": {
					"home": 3,
					"away": 1
				},
				"score": {
					"halftime": {
						"home": 0,
						"away": 1
					},
					"fulltime": {
						"home": 3,
						"away": 1
					},
					"extratime": {
						"home": null,
						"away": null
					},
					"penalty": {
						"home": null,
						"away": null
					}
				}
			},
			{
				"fixture": {
					"id": 1035085,
					"referee": "A. Madley",
					"timezone": "UTC",
					"date": "2023-09-16T14:00:00+00:00",
					"timestamp": 1694872800,
					"periods": {
						"first": 1694872800,
						"second": 1694876400
					},
					"venue": {
						"id": 598,
						"name": "London Stadium",
						"city": "London"
					},
					"status": {
						"long": "Match Finished",
						"short": "FT",
						"elapsed": 90
					}
				},
				"league": {
					"id": 39,
					"name": "Premier League",
					"country": "England",
					"logo": "https://media-4.api-sports.io/football/leagues/39.png",
					"flag": "https://media-4.api-sports.io/flags/gb.svg",
					"season": 2023,
					"round": "Regular Season - 5"
				},
				"teams": {
					"home": {
						"id": 48,
						"name": "West Ham",
						"logo": "https://media-4.api-sports.io/football/teams/48.png",
						"winner": false
					},
					"away": {
						"id": 50,
						"name": "Manchester City",
						"logo": "https://media-4.api-sports.io/football/teams/50.png",
						"winner": true
					}
				},
				"goals": {
					"home": 1,
					"away": 3
				},
				"score": {
					"halftime": {
						"home": 1,
						"away": 0
					},
					"fulltime": {
						"home": 1,
						"away": 3
					},
					"extratime": {
						"home": null,
						"away": null
					},
					"penalty": {
						"home": null,
						"away": null
					}
				}
			},
			{
				"fixture": {
					"id": 1035075,
					"referee": "M. Oliver",
					"timezone": "UTC",
					"date": "2023-09-02T14:00:00+00:00",
					"timestamp": 1693663200,
					"periods": {
						"first": 1693663200,
						"second": 1693666800
					},
					"venue": {
						"id": 555,
						"name": "Etihad Stadium",
						"city": "Manchester"
					},
					"status": {
						"long": "Match Finished",
						"short": "FT",
						"elapsed": 90
					}
				},
				"league": {
					"id": 39,
					"name": "Premier League",
					"country": "England",
					"logo": "https://media-4.api-sports.io/football/leagues/39.png",
					"flag": "https://media-4.api-sports.io/flags/gb.svg",
					"season": 2023,
					"round": "Regular Season - 4"
				},
				"teams": {
					"home": {
						"id": 50,
						"name": "Manchester City",
						"logo": "https://media-4.api-sports.io/football/teams/50.png",
						"winner": true
					},
					"away": {
						"id": 36,
						"name": "Fulham",
						"logo": "https://media-4.api-sports.io/football/teams/36.png",
						"winner": false
					}
				},
				"goals": {
					"home": 5,
					"away": 1
				},
				"score": {
					"halftime": {
						"home": 2,
						"away": 1
					},
					"fulltime": {
						"home": 5,
						"away": 1
					},
					"extratime": {
						"home": null,
						"away": null
					},
					"penalty": {
						"home": null,
						"away": null
					}
				}
			}
		]
	}

	mockStandings: IAPIResponse = {
		"get": "standings",
		"parameters": {
			"league": "39",
			"season": "2023"
		},
		"errors": [],
		"results": 1,
		"paging": {
			"current": 1,
			"total": 1
		},
		"response": [
			{
				"league": {
					"id": 39,
					"name": "Premier League",
					"country": "England",
					"logo": "https://media-4.api-sports.io/football/leagues/39.png",
					"flag": "https://media-4.api-sports.io/flags/gb.svg",
					"season": 2023,
					"standings": [
						[
							{
								"rank": 1,
								"team": {
									"id": 47,
									"name": "Tottenham",
									"logo": "https://media-4.api-sports.io/football/teams/47.png"
								},
								"points": 23,
								"goalsDiff": 12,
								"group": "Premier League",
								"form": "WWWDW",
								"status": "same",
								"description": "Promotion - Champions League (Group Stage: )",
								"all": {
									"played": 9,
									"win": 7,
									"draw": 2,
									"lose": 0,
									"goals": {
										"for": 20,
										"against": 8
									}
								},
								"home": {
									"played": 4,
									"win": 4,
									"draw": 0,
									"lose": 0,
									"goals": {
										"for": 8,
										"against": 2
									}
								},
								"away": {
									"played": 5,
									"win": 3,
									"draw": 2,
									"lose": 0,
									"goals": {
										"for": 12,
										"against": 6
									}
								},
								"update": "2023-10-24T00:00:00+00:00"
							},
							{
								"rank": 2,
								"team": {
									"id": 50,
									"name": "Manchester City",
									"logo": "https://media-4.api-sports.io/football/teams/50.png"
								},
								"points": 21,
								"goalsDiff": 12,
								"group": "Premier League",
								"form": "WLLWW",
								"status": "same",
								"description": "Promotion - Champions League (Group Stage: )",
								"all": {
									"played": 9,
									"win": 7,
									"draw": 0,
									"lose": 2,
									"goals": {
										"for": 19,
										"against": 7
									}
								},
								"home": {
									"played": 4,
									"win": 4,
									"draw": 0,
									"lose": 0,
									"goals": {
										"for": 10,
										"against": 2
									}
								},
								"away": {
									"played": 5,
									"win": 3,
									"draw": 0,
									"lose": 2,
									"goals": {
										"for": 9,
										"against": 5
									}
								},
								"update": "2023-10-24T00:00:00+00:00"
							}
							
						]
					]
				}
			}
		]
	}

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
			return response.response[0].league.standings[0].map(mapResponse)
		}
		return of(this.mockStandings)
		// return this.httpClient
		// .get(
		// 	`${environment.API}/standings?league=${league}&season=${season}`,
		// 	{ headers: headers})
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
			return response.response.map(mapResponse)
		}

		return of(this.mockFixture)
		// return this.httpClient
		// .get(
		// 	`${environment.API}/fixtures?team=${teamId}&last=${last}`,
		// 	{ headers: headers})
		.pipe(map(mapResponseToFixtures))
	}
}
