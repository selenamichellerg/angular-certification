import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameResultsComponent } from './game-results.component';

const routes: Routes = [
  {
    path: '',
    component: GameResultsComponent,
    data: {
      title: 'Game Results',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameResultsRoutingModule {}