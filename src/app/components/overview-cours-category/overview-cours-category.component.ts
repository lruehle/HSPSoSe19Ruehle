import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-overview-cours-category',
  templateUrl: './overview-cours-category.component.html',
  styleUrls: ['./overview-cours-category.component.scss']
})
export class OverviewCoursCategoryComponent implements OnInit {

  public nId;
  public categories;
  constructor( private http: HttpClient, private route: ActivatedRoute) {
    this.categories = [];
  }

  ngOnInit() {
    this.nId = this.route.snapshot.paramMap.get('id');
    this.http.get('https://hochschulsport-koeln.de/json/courses/' + this.nId + '/?_format=json')
      .subscribe((data) => {this.categories = data; });
  }

}
