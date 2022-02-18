import { Component, OnInit } from '@angular/core';
import { interval, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source = interval(1000);
    const example = source.pipe(
      take(10),
      toArray()
    )
    const subscribe = example.subscribe(val => console.log(val))
  }

}
