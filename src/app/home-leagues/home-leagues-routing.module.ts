import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLeaguesComponent } from './home-leagues.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLeaguesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeLeaguesRoutingModule { }