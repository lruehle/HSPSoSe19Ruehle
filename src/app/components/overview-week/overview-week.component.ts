import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-overview-week',
  templateUrl: './overview-week.component.html',
  styleUrls: ['./overview-week.component.scss']
})
export class OverviewWeekComponent implements OnInit {

  public weekday;
  public id;
  constructor(private http: HttpClient) {
    this.weekday = [];
}

  ngOnInit() {
    this.http.get('https://hochschulsport-koeln.de/json/courses/' + this.id + '/?_format=json')
      .subscribe((data) => {this.weekday = data; });
  }

}
