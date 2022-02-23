import { Component, OnInit } from '@angular/core';
import { delay, filter, fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-operatos-rxjs',
  templateUrl: './operatos-rxjs.component.html',
  styleUrls: ['./operatos-rxjs.component.css']
})
export class OperatosRxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    ///operator filter
    const clicks = fromEvent(document, 'click');
   // const clicksOnDivs = clicks.pipe(filter(ev => ev.target.tagName === 'DIV'));
    const clicksOnDivs = of()
    clicksOnDivs.subscribe(x => console.log(x));

    //dalay
    const date = new Date('March 15, 2050 12:00:00'); // in the future
    const delayClicks1 = clicks.pipe(delay(date)); // click emitted after that date
    const delayClicks2 = clicks.pipe(delay(1000)); // click emitted after that date
    delayClicks1.subscribe(x => console.log(x));
    delayClicks2.subscribe(x => console.log(x));
  }

}
