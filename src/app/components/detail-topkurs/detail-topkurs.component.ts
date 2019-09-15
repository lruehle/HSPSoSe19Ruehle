import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-topkurs',
  templateUrl: './detail-topkurs.component.html',
  styleUrls: ['./detail-topkurs.component.scss']
})
export class DetailTopkursComponent implements OnInit {

  public nID;
  public topcourses;
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.topcourses = [];
  }


  ngOnInit() {
    this.nID = this.route.snapshot.paramMap.get('id');
    this.http.get('https://hochschulsport-koeln.de/json/topcourses?_format=json').subscribe((data) => {this.topcourses = data; });
  }

}
