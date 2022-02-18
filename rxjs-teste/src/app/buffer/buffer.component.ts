import { Component, OnInit } from '@angular/core';
import { buffer, fromEvent, interval } from 'rxjs';



@Component({
  selector: 'app-buffer',
  templateUrl: './buffer.component.html',
  styleUrls: ['./buffer.component.css']
})
export class BufferComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("teste")
    const clicks = fromEvent(document, 'click');
    const intervalEvents = interval(1000);
    const buffered = intervalEvents.pipe(buffer(clicks));
    buffered.subscribe(x => console.log(x));
  }

}
