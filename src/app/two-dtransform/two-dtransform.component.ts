import { state, trigger, style, transition, animate } from '@angular/animations';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-two-dtransform',
  templateUrl: './two-dtransform.component.html',
  styleUrls: ['./two-dtransform.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('transform2D', [
      state('crewed', style({ transform: 'skew(10deg, 10deg)' })),
      state('scaled', style({ transform: 'scaleX(0.3)' })),
      state('rotated', style({ transform: 'rotateX(360deg) rotateY(360deg)'})),
      state('translated', style({ transform: 'translate(300px, -10px)' })),
      transition('* => crewed', [animate('0.3s ease-in')]),
      transition('crewed => *', [animate('0.5s ease-in')]),
      transition('* => scaled', [animate('0.3s ease-in')]),
      transition('scaled => *', [animate('0.5s ease-in')]),
      transition('* => rotated', [animate('3s ease-in')]),
      transition('rotated => *', [animate('0.5s ease-in')]),
      transition('* => translated', [animate('0.3s ease-in')]),
      transition('translated => *', [animate('0.5s ease-in')]),
    ])
  ]
})
export class TwoDtransformComponent implements OnInit {
  state = null;
  constructor() { }

  ngOnInit(): void {
  }
  crewOn(): void {
    this.state = 'crewed';
  }
  crewOff(): void {
    this.state = null;
  }
  scaleOn(): void {
    this.state = 'scaled';
  }
  scaleOff(): void {
    this.state = null;
  }
  rotatedOn(): void {
    this.state = 'rotated';
  }
  rotatedOff(): void {
    this.state = null;
  }
  translatedOn(): void {
    this.state = 'translated';
  }
  translatedOff(): void {
    this.state = null;
  }

}
