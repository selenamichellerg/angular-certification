import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameResultsComponent } from './game-results.component';
import { GameResultsRoutingModule } from './game-results-routing.module';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    GameResultsComponent
  ],
  imports: [
    CommonModule,
    GameResultsRoutingModule,
    MatTableModule
  ]
})
export class GameResultsModule { }
