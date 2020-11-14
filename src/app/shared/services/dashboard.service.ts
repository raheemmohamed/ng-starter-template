import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  sidebarToggle = new EventEmitter(false);
  constructor(private http: HttpClient) {}

  getData() {
    let url = '';
    return this.http.get(url).pipe(map((res) => res));
  }

  getUserInfo() {
    let url = '';
    return this.http.get(url).pipe(map((res) => res));
  }

  toggleSidebar(e) {
    console.log('sidebar status from servie', e);
    this.sidebarToggle.emit(e);
  }
}
