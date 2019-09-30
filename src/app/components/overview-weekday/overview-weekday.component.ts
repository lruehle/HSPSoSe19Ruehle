import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-overview-weekday',
  templateUrl: './overview-weekday.component.html',
  styleUrls: ['./overview-weekday.component.scss']
})
export class OverviewWeekdayComponent implements OnInit {
  public day;
  public dayId;
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.day = [];
  }

  ngOnInit() {
    this.dayId = this.route.snapshot.paramMap.get('id');
    this.http.get('https://hochschulsport-koeln.de/json/coursesbyweekday/' + this.dayId + '/?_format=json')
      .subscribe((data) => {this.day = data; });
  }

}
