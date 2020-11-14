import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-default-table',
  templateUrl: './default-table.component.html',
  styleUrls: ['./default-table.component.scss'],
})
export class DefaultTableComponent implements OnInit {
  @Input() cols;
  @Input() values;

  @Output() searchText = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  searchedText(e) {
    this.searchText.emit(e);
  }
}
