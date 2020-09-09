import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  // @ViewChild('preloader', { static: true }) private preloader: ElementRef<HTMLDivElement>;
  title = 'animationAngularFun';
  constructor(private _r2: Renderer2) {

  }
  ngAfterViewInit(): void {
    // console.log('>>>>>>>>>>>>>>>>>>>>>>>>');
    // console.log(this.preloader);
    // const el = this._r2.selectRootElement('.preloader');
    // setTimeout(() => {
      // if (el) {
      //   el.remove();
      // }
    // }, 1500);
    // console.log(el);
  }
}
