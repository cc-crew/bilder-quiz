import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DayOneComponent} from "./day-one/day-one.component";
import {DayTwoComponent} from "./day-two/day-two.component";
import {DayThreeComponent} from "./day-three/day-three.component";
import {DayFourComponent} from "./day-four/day-four.component";
import {DayFiveComponent} from "./day-five/day-five.component";
import {DaySixComponent} from "./day-six/day-six.component";
import {DaySevenComponent} from "./day-seven/day-seven.component";
import {LinkToPfdComponent} from "./link-to-pfd/link-to-pfd.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomeComponent},
  {path: 'dayOne', component: DayOneComponent},
  {path: 'dayTwo', component: DayTwoComponent},
  {path: 'dayThree', component: DayThreeComponent},
  {path: 'dayFour', component: DayFourComponent},
  {path: 'dayFive', component: DayFiveComponent},
  {path: 'daySix', component: DaySixComponent},
  {path: 'daySeven', component: DaySevenComponent},
  {path: 'link', component: LinkToPfdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
