import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navbarOpen = false;
  dropingdown = false;
  deviceInfo = null;
  title = 'HSPSoSe19Ruehle';
  showButton = false;
  show = true;

  constructor(private deviceService: DeviceDetectorService) {this.detection(); }
  detection() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    const isDesktopDevice = this.deviceService.isDesktop();
    console.log(this.deviceInfo);
    console.log('mobile:' + isMobile + 'tablet:' + isTablet + 'Desktop:' + isDesktopDevice);
    if (isMobile || isTablet) {
      this.showButton = true;
      this.show = false;
    }
  }
  toggleCollapse() {
    this.show = !this.show;
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  dropdown() {
    this.dropingdown = !this.dropingdown;
  }
}
