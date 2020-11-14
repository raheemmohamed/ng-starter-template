import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { DashboardService } from './dashboard.service';

describe('DashboardService', () => {
  let service: DashboardService;

  let dashboardSerice: DashboardService;
  let httpMock: HttpClientTestingModule;

  let mockUserinformations = {
    message: 'OK',
    data: [
      {
        name: 'raheem',
        email: 'raheem@gmail.com',
        username: 'raheemmohamed',
      },
      {
        name: 'test user',
        email: 'testuser@gmail.com',
        username: 'test user',
      },
    ],
  };

  // More details about angular unit testing refer below URL
  // https://blog.angulartraining.com/how-to-write-unit-tests-for-angular-code-that-uses-the-httpclient-429fa782eb15
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DashboardService],
    });

    dashboardSerice = TestBed.get(DashboardService);
    httpMock = TestBed.get(HttpClientTestingModule);

    service = TestBed.inject(DashboardService);
  });

  afterEach(inject(
    [HttpTestingController],
    (httpMock: HttpTestingController) => {
      httpMock.verify();
    }
  ));

  it('should be created', () => {
    const service: DashboardService = TestBed.get(DashboardService);
    expect(service).toBeTruthy();
  });

  it('get user information from api', inject(
    [HttpTestingController, DashboardService],
    (httpMock: HttpTestingController, service: DashboardService) => {
      // We call the service
      service.getUserInfo().subscribe((res: any) => {
        expect(res.data.length).toBeGreaterThan(1);
      });

      // We set expectation for httpClient mock
      const req = httpMock.expectOne('http://getUserprofile.com/getAllUsers');
      expect(req.request.method).toEqual('GET');

      // Then we set the fake data to be return by the mock
      req.flush(mockUserinformations);
    }
  ));
});
