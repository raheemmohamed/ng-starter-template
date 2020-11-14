import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
})
export class SideNavigationComponent implements OnInit {
  toggle = false;

  @Output() sideNavChangeStatus = new EventEmitter();
  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.toggle = !this.toggle;

    this.dashboardService.toggleSidebar(this.toggle);
    // this.sideNavChangeStatus.emit(this.toggle);
  }
}
