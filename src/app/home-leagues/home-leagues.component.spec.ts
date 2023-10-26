import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLeaguesComponent } from './home-leagues.component';

describe('HomeLeaguesComponent', () => {
  let component: HomeLeaguesComponent;
  let fixture: ComponentFixture<HomeLeaguesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeLeaguesComponent]
    });
    fixture = TestBed.createComponent(HomeLeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
