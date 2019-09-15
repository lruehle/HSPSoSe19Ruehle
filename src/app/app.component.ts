import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HSPSoSe19Ruehle';
  show = false;
  toggleCollapse() {
    this.show = !this.show;
  }
}
