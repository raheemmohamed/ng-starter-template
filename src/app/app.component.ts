import { Component, OnInit } from '@angular/core';
import { DashboardService } from './shared/services/dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'NG starter kit';
  toggle;
  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.detectSidebarToggle();
  }

  detectSidebarToggle() {
    this.dashboardService.sidebarToggle.subscribe((status) => {
      this.toggle = status;
    });
  }
  activeSideNav(e) {
    this.toggle = e;
  }
}
