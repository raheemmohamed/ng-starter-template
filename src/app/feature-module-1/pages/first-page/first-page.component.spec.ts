import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageComponent } from './first-page.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DashboardService } from 'src/app/shared/services/dashboard.service';
import { of } from 'rxjs';
import { NgZone } from '@angular/core';

describe('FirstPageComponent', () => {
  let component: FirstPageComponent;
  let fixture: ComponentFixture<FirstPageComponent>;

  let mockResponseFromAPI = {
    message: 'Success',
    data: {
      keys: 'keys1',
      keys1: 'value 1',
    },
  };

  let mockngZoneService;
  let dashboardService; // this is ur actual service which you always use to hit and get response from backend
  let mockDashboardService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FirstPageComponent],
      imports: [HttpClientTestingModule],
      providers: [DashboardService], //
    }).compileComponents();
  }));

  beforeEach(() => {
    // test for mock service api refer more:- https://medium.com/@samichkhachkhi/jasmine-spies-ab4c15029537
    mockDashboardService = jasmine.createSpyObj(['getData', 'getUserInfo']);
    mockngZoneService = jasmine.createSpyObj('NgZone', [
      'run',
      'runOutsideAngular',
    ]);

    fixture = TestBed.createComponent(FirstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component = new FirstPageComponent(mockDashboardService, mockngZoneService); // this is how added to constructor
  });

  it('should create', () => {
    /**
     * This should run if you using ngZone
     */
    let zone = TestBed.get(NgZone);
    spyOn(zone, 'run').and.callFake((fn: Function) => fn());

    expect(component).toBeTruthy();
  });

  it('get data once ngOnchange detect', () => {
    mockDashboardService.getData.and.returnValue(of(mockResponseFromAPI));

    component.getUserinformation();

    expect(component.dashboardData.length).toBeGreaterThan(1);
  });
});
