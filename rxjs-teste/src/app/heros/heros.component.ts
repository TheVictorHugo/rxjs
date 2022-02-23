import { Component, OnInit } from '@angular/core';
import { Hero } from '../the-hero-editor/hero';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heroes = HEROES;
  selectedHero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectHero(hero: Hero): void {
    this.selectedHero = hero;
  }

}
