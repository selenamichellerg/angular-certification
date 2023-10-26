import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fixture } from '@models/fixture';
import { FootballService } from '@services/football.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-game-results',
	templateUrl: './game-results.component.html',
	styleUrls: ['./game-results.component.scss']
})
export class GameResultsComponent {
	fixtures$: Observable<Fixture[]> | undefined
	numberItems = 10
	displayedColumns: string[] = ['homelogo', 'homename', 'homegoals', 'line', 'awaygoals', 'awayname', 'awaylogo'];

	constructor(
		private footballService: FootballService,
		private route: ActivatedRoute
	) {
		const url = route.paramMap
			.subscribe((r) => {
				const teamId = r.get('id');
				console.log(teamId);
				if (teamId) {
					this.getFixtures(teamId);
				}
			})
			.unsubscribe();
	}

	getFixtures(teamId: string): void {
		this.fixtures$ = this.footballService.getFixtures(teamId, this.numberItems)
	}
}
