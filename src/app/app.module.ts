import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayOneComponent } from './day-one/day-one.component';
import { DayTwoComponent } from './day-two/day-two.component';
import { DayThreeComponent } from './day-three/day-three.component';
import { DayFourComponent } from './day-four/day-four.component';
import { DayFiveComponent } from './day-five/day-five.component';
import { DaySixComponent } from './day-six/day-six.component';
import { DaySevenComponent } from './day-seven/day-seven.component';
import { LinkToPfdComponent } from './link-to-pfd/link-to-pfd.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    DayOneComponent,
    DayTwoComponent,
    DayThreeComponent,
    DayFourComponent,
    DayFiveComponent,
    DaySixComponent,
    DaySevenComponent,
    LinkToPfdComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
