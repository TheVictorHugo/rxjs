import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-the-hero-editor',
  templateUrl: './the-hero-editor.component.html',
  styleUrls: ['./the-hero-editor.component.css']
})
export class TheHeroEditorComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: "nome"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
