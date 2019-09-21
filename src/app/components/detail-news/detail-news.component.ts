import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.scss']
})
export class DetailNewsComponent implements OnInit {

  public nID;
  public news;
  constructor(private http: HttpClient, private route: ActivatedRoute ) {
    this.news = [];
  }

  ngOnInit() {
    this.nID = this.route.snapshot.paramMap.get('id');
    this.http.get('https://hochschulsport-koeln.de/json/news').subscribe((data) => (this.news = data));
  }

}
