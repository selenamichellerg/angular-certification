import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home-leagues/home-leagues.module').then((m) => m.HomeLeaguesModule)
  },
  {
    path: 'game-results/:id',
    loadChildren: () =>
      import('./game-results/game-results.module').then((m) => m.GameResultsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
