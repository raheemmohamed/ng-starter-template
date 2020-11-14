import { AfterViewInit, Component, NgZone, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { DashboardService } from '../../../shared/services/dashboard.service';
@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
})
export class FirstPageComponent implements OnInit, AfterViewInit {
  dashboardData;
  options = [
    { label: 'Off', value: 'off' },
    { label: 'On', value: 'on' },
  ];

  columns = [
    {
      field: 'header1',
      header: 'header 1',
    },
    {
      field: 'header2',
      header: 'header 2',
    },
    {
      field: 'header3',
      header: 'header 3',
    },
    {
      field: 'header4',
      header: 'header 4',
    },
  ];
  mockDataForTable;

  searchTextValue = '';

  mockSearchData;

  preload = true;

  showMessage = true;

  alertConfiguration = {
    title: 'Welcome to Ng starter template',
    description:
      'You can use and develop your application on top of this template',
    closeOption: true,
    alertType: 'info',
    statusIcon: true,
  };

  constructor(
    private dashboardService: DashboardService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.getUserinformation();
    this.loadMockData();
  }

  getUserinformation() {
    this.dashboardService.getData().subscribe(
      (res) => {
        this.dashboardData = res;
        console.log('response data', res);
      },
      (error) => {
        console.error('Service error', error);
      }
    );
  }

  loadMockData() {
    let mockData = [
      {
        header1: 'Value 1',
        header2: 'value 1',
        header3: 'value 1',
        header4: 'value 1',
      },
      {
        header1: 'Value 2',
        header2: 'value 2',
        header3: 'value 2',
        header4: 'value 2',
      },
      {
        header1: 'Value 3',
        header2: 'value 3',
        header3: 'value 3',
        header4: 'value 3',
      },
      {
        header1: 'Value 4',
        header2: 'value 4',
        header3: 'value 4',
        header4: 'value 4',
      },
    ];

    this.mockDataForTable = mockData;
  }

  filterData(e) {
    const searchList = [];

    this.searchTextValue = e;

    if (this.searchTextValue !== '') {
      this.mockDataForTable.forEach((res) => {
        let flag = true;

        if (JSON.stringify(res.header1).indexOf(this.searchTextValue) >= 0) {
          flag = true;
        }

        if (
          res.header2
            .toLowerCase()
            .indexIf(this.searchTextValue.toLowerCase()) >= 0
        ) {
          flag = true;
        }
        if (flag) {
          searchList.push(res);
        }
      });
    }

    this.mockSearchData = searchList;

    if (this.searchTextValue == '') {
      this.mockSearchData = this.mockDataForTable;
    }
  }

  modalChangeStatus(status) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.preload = false;
    }, 5000);
  }
}
