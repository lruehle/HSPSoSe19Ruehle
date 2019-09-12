import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetailNewsComponent } from './components/detail-news/detail-news.component';
import { DetailTopkursComponent } from './components/detail-topkurs/detail-topkurs.component';
import { DetailKursComponent } from './components/detail-kurs/detail-kurs.component';
import { OverviewCoursCategoryComponent } from './components/overview-cours-category/overview-cours-category.component';
import { OverviewCoursesOfferedComponent } from './components/overview-courses-offered/overview-courses-offered.component';
import { OverviewWeekComponent } from './components/overview-week/overview-week.component';
import { OverviewWeekdayComponent } from './components/overview-weekday/overview-weekday.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailNewsComponent,
    DetailTopkursComponent,
    DetailKursComponent,
    OverviewCoursCategoryComponent,
    OverviewCoursesOfferedComponent,
    OverviewWeekComponent,
    OverviewWeekdayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
