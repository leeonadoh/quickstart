import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  template: `
    <h3>Top Heroes</h3>
    <div class="grid grid-pad">
      <div *ngFor="let hero of heroes" (click)="gotoDetail(hero)" class="col-1-4">
        <div class="module hero">
          <h4>{{hero.name}}</h4>
        </div>
      </div>
    </div>
  `,
  selector: 'my-dashboard'
})

export class DashboardComponent implements OnInit{
  public heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit(){
    this.heroService.getHeroes()
      .then(heroList => this.heroes = heroList.slice(1, 5));
  }

  gotoDetail(hero:Hero){

  }
}
