import { Component } from '@angular/core';
import { FootballService } from '../services/football.service';
import { Observable } from 'rxjs';
import { Leagues } from '../models/leagues';
import { Standing } from '@models/standing';

@Component({
  selector: 'app-home-leagues',
  templateUrl: './home-leagues.component.html',
  styleUrls: ['./home-leagues.component.scss']
})
export class HomeLeaguesComponent {
  countrySelect: number  = 0
  leaguesList$: Observable<Leagues[]>
  standingList$: Observable<Standing[]> | undefined;
  date: number = new Date().getFullYear();
  
  constructor(private footballService: FootballService) {
    this.leaguesList$ = this.footballService.getLeagues()
    this.standingList$ = undefined
  }

  ngOnInit() {
    this.countrySelect = Number(localStorage.getItem('country'));
    this.leaguesList$ = this.footballService.getLeagues()
    this.setCountrySelected(this.countrySelect)
  }

  setCountrySelected(id: number): void {
    this.countrySelect = id
    this.standingList$ = this.footballService.getStandings(id, this.date)
    localStorage.setItem('country', id.toString());
  }
}
