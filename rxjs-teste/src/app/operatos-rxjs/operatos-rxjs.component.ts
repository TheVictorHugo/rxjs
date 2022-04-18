import { Component, OnInit } from '@angular/core';
import { buffer, delay, filter, fromEvent, interval, map, of, range } from 'rxjs';

@Component({
  selector: 'app-operatos-rxjs',
  templateUrl: './operatos-rxjs.component.html',
  styleUrls: ['./operatos-rxjs.component.css']
})
export class OperatosRxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.functionRange();
  }

  functionDalay = () =>{
    //dalay
    const clicks = fromEvent(document, 'click');
    const date = new Date('March 15, 2050 12:00:00'); // in the future
    const delayClicks1 = clicks.pipe(delay(date)); // click emitted after that date
    const delayClicks2 = clicks.pipe(delay(1000)); // click emitted after that date
    delayClicks1.subscribe(x => console.log(x));
    delayClicks2.subscribe(x => console.log(x));
  }

  functionMap = () => {
    //map
    const clicks = fromEvent(document, 'click');
    const positions = clicks.pipe(map(ev => {
      const e = ev as MouseEvent;
      return e.clientX
      
    }));
    positions.subscribe(x => console.log(x))
  }

  functionBuffer = () => {
    const clicks = fromEvent(document, 'click');
    const intervalEvents = interval(1000);
    const buffered = intervalEvents.pipe(buffer(clicks));
    buffered.subscribe(x => console.log(x))
  }

  functionRange = () => {
    const numbers = range(1,3);
    numbers.subscribe({
      next: value => {console.log(value)},
      complete: () => {console.log('Complete!')}
    })
  }

}
