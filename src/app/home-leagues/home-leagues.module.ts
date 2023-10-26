import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLeaguesComponent } from './home-leagues.component';
import { HomeLeaguesRoutingModule } from './home-leagues-routing.module';
import { CountriesComponent } from './countries/countries.component';
import { StandingsComponent } from './standings/standings.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    HomeLeaguesComponent,
    CountriesComponent,
    StandingsComponent
  ],
  imports: [
    CommonModule,
    HomeLeaguesRoutingModule,
    MatTableModule
  ]
})
export class HomeLeaguesModule { }
