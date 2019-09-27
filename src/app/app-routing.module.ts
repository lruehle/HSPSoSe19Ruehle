import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {DetailKursComponent} from './components/detail-kurs/detail-kurs.component';
import {DetailNewsComponent} from './components/detail-news/detail-news.component';
import {DetailTopkursComponent} from './components/detail-topkurs/detail-topkurs.component';
import {OverviewCoursCategoryComponent} from './components/overview-cours-category/overview-cours-category.component';
import {OverviewCoursesOfferedComponent} from './components/overview-courses-offered/overview-courses-offered.component';
import {OverviewWeekComponent} from './components/overview-week/overview-week.component';
import {OverviewWeekdayComponent} from './components/overview-weekday/overview-weekday.component';

const routes: Routes = [
  {path: '' , redirectTo: 'home', pathMatch: 'full'},
  {path: 'home' , component: HomeComponent},
  {path: 'DetailCourse/:id', component: DetailKursComponent},
  {path: 'DetailNews/:id', component: DetailNewsComponent},
  {path: 'DetailTopCourse/:id', component: DetailTopkursComponent},
  {path: 'OverviewCategories/:id', component: OverviewCoursCategoryComponent},
  {path: 'OverviewOffered', component: OverviewCoursesOfferedComponent},
  {path: 'OverviewWeek', component: OverviewWeekComponent},
  {path: 'OverviewWeekDay', component: OverviewWeekdayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
