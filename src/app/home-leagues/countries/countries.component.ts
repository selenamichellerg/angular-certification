import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Leagues } from 'src/app/models/leagues';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent {
  @Output() countrySelected: EventEmitter<number> = new EventEmitter()
  @Input() leaguesList: Leagues[] | null = []
  @Input() countrySelect: number = 0

  clickCountry(name: number): void {
    this.countrySelected.emit(name)
  }
}
