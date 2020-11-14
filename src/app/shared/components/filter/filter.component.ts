import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() placeholderText;
  @Input() dtReference;

  searchValue;

  @Output() searchTextValue = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  filterSearch(event) {
    console.log('Search event', event);
    this.dtReference.filterGlobal(event.target.value, 'contains');
    this.searchTextValue.emit(event);
  }
}
