import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

//prime UI component modules importing
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [CommonModule, SelectButtonModule, TableModule],
  exports: [SelectButtonModule, TableModule],
})
export class PrimeModule {}
