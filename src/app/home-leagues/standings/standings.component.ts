import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Standing } from '@models/standing';

@Component({
	selector: 'app-standings',
	templateUrl: './standings.component.html',
	styleUrls: ['./standings.component.scss']
})
export class StandingsComponent {
	@Input() countrySelected: number = 0
	@Input() standingList: Standing[] | null = []
	displayedColumns: string[] = ['position', 'logo', 'name', 'games', 'wins', 'losses', 'draws', 'goalDifference', 'points'];

	constructor(private route: Router) {}

	goToGameResults(teamId: number): void {
		this.route.navigateByUrl(`/game-results/${teamId}`);
	}
}
