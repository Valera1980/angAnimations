import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleOneComponent } from './example-one/example-one.component';
import { ExampleHoverOneComponent } from './example-hover-one/example-hover-one.component';
import { TwoDtransformComponent } from './two-dtransform/two-dtransform.component';
import { SvgAnimationComponent } from './svg-animation/svg-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleOneComponent,
    ExampleHoverOneComponent,
    TwoDtransformComponent,
    SvgAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
