import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('moveDiv', [
      state('some', style({ height: 500, backgroundColor: 'green' })),
      // state('start', style({ height: 1000, opacity: 0.2 })),
      // state('middle', style({ height: 250, opacity: 0.5 })),
      // state('end', style({ height: 200, opacity: 1 })),
      // transition('start => end', [animate('3s')])
      // transition('void => *', [style({ opacity: 0, transform: 'translateY(25%)' }), animate('1s ease-in-out')]),
      transition('void => *', [
        animate(2000, keyframes([
          style({ opacity: 0, transform: 'translateY(-30px)', offset: 0 }),
          style({ opacity: 0.3, transform: 'translateY(30px)', offset: 0.3 }),
          style({ opacity: 0.8, transform: 'translateY(0)', offset: 0.8 })
        ]))
      ]),
      transition('* => void', [
        // style({ opacity: 1, transform: 'translateX(-50%) translateY(-50%) scale(1)' }),
        animate('.3s', style({ backgroundColor: 'green', opacity: 0, transform: 'scale(.6)' }))
      ])
    ])
  ]
})
export class ExampleOneComponent implements OnInit {
  state = 'some';
  divs = [1, 2, 3, 4, 5, 6];
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      // this.state = 'end';
    }, 2000);
  }
  remove(): void {
    // this.divs = [1, 2];
    this.divs.splice(this.divs.length - 1, 1);
  }
  // @HostListener('mouseenter')
  // hover(): void{
  //  this.state = 'end';
  // }
  // @HostListener('mouseleave')
  // leave(): void{
  //   this.state = 'start';

  // }
  strartA(p: unknown): void {
    // console.log('============ start ==============');
    // console.log(p);
  }
  endA(p: unknown): void {
    // console.log('============ end ==============');
    // console.log(p);
  }

}
