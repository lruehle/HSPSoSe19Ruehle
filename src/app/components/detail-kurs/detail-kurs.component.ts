import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-kurs',
  templateUrl: './detail-kurs.component.html',
  styleUrls: ['./detail-kurs.component.scss']
})
export class DetailKursComponent implements OnInit {

  public courseId;
  public course;
  public allcourses;
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.course = [];
  }

  ngOnInit() {
    this.courseId = this.route.snapshot.paramMap.get('id');
    this.http.get('https://hochschulsport-koeln.de/json/course/' + this.courseId + '/?_format=json')
      .subscribe((data) => {this.course = data; });
    this.http.get('https://hochschulsport-koeln.de/json/courses?_format=json').subscribe((data) => { this.allcourses = data; });
  }

}
