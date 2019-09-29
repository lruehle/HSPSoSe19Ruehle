import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-overview-week',
  templateUrl: './overview-week.component.html',
  styleUrls: ['./overview-week.component.scss']
})
export class OverviewWeekComponent implements OnInit {

  public monday;
  public tuesday;
  public wednesday;
  public thursday;
  public friday;
  public saturday;
  public sunday;
  public id;
  public course;
  constructor(private http: HttpClient) {
    this.course = 36;
    this.monday = [];
    this.tuesday = [];
    this.wednesday = [];
    this.thursday = [];
    this.friday = [];
    this.saturday = [];
    this.sunday = [];
}

  ngOnInit() {
    this.http.get('https://hochschulsport-koeln.de/json/coursesbyweekday/' + 8 + '/?_format=json')
      .subscribe((data) => {this.monday = data; });
    this.http.get('https://hochschulsport-koeln.de/json/coursesbyweekday/' + 9 + '/?_format=json')
      .subscribe((data) => {this.tuesday = data; });
    this.http.get('https://hochschulsport-koeln.de/json/coursesbyweekday/' + 10 + '/?_format=json')
      .subscribe((data) => {this.wednesday = data; });
    this.http.get('https://hochschulsport-koeln.de/json/coursesbyweekday/' + 11 + '/?_format=json')
      .subscribe((data) => {this.thursday = data; });
    this.http.get('https://hochschulsport-koeln.de/json/coursesbyweekday/' + 12 + '/?_format=json')
      .subscribe((data) => {this.friday = data; });
    this.http.get('https://hochschulsport-koeln.de/json/coursesbyweekday/' + 13 + '/?_format=json')
      .subscribe((data) => {this.saturday = data; });
    this.http.get('https://hochschulsport-koeln.de/json/coursesbyweekday/' + 14 + '/?_format=json')
      .subscribe((data) => {this.sunday = data; });
  }
  show(i) {
   this.course = i;
  }

}
