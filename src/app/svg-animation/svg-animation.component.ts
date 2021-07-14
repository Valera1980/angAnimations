import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { interval } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-svg-animation',
  templateUrl: './svg-animation.component.html',
  styleUrls: ['./svg-animation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations:[
    trigger('animButton', [
      state('translated', style({ transform: 'translate(300px, -10px)', opacity: 0})),
      state('rotated', style({ transform: 'rotateX(360deg) rotateY(360deg)' })),

      transition('translated => *', [animate('0s ease-in')]),
      transition('* => translated', [animate('0.7s ease-in')]),
      

      transition('* => rotated', [animate('3s ease-in')]),
      transition('rotated => *', [animate('0.5s ease-in')]),
    ])
  ]
})
export class SvgAnimationComponent implements OnInit {
  state = null;
  constructor(
    private _cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }
  startAnim(): void {
    // this.state = null;
    this.state = 'translated';
    let counter = 0;
    setTimeout(() => {
      this.state = null;
      this._cd.detectChanges();
    }, 600);
    interval(900)
    .pipe(
      filter(() => counter <= 10)
    )
    .subscribe(() => {

      console.log('>>>>');
      counter++;
      this.state = 'translated';
      this._cd.detectChanges();
       setTimeout(() => {
      this.state = null;
      this._cd.detectChanges();
    }, 600);

    })
   
  }
}
