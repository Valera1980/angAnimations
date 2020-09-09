import { state, style, trigger, animate, transition } from '@angular/animations';
import { Component, OnInit, ChangeDetectionStrategy, HostListener } from '@angular/core';
// import * as CSS from 'csstype';
// const hoveredStyles: CSS.Properties = {
//    opacity: 0.8,
//    msTransform: 'scale(1.01)',
//    cursor: 'pointer',
//    backgroundColor: '#4a4343'
// };

type TAnimState = 'hovered' | 'leaved';


@Component({
  selector: 'app-example-hover-one',
  templateUrl: './example-hover-one.component.html',
  styleUrls: ['./example-hover-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('hoverDiv', [
      state('hovered', style({
        opacity: 0.8,
        transform: 'scale(1.01)',
        cursor: 'pointer',
        backgroundColor: '#4a4343',
      })),
      transition('* => hovered', [animate('0.3s ease-in')]),
    ])
  ]
})
export class ExampleHoverOneComponent implements OnInit {
  state: TAnimState = 'leaved';
  constructor() { }

  ngOnInit(): void {
  }
  over(): void {
    this.state = 'hovered';
  }
  out(): void {
    if (this.state === 'hovered') {
      this.state = 'leaved';
    }
  }

}
