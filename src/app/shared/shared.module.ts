import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultTableComponent } from './components/tables/default-table/default-table.component';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { PrimeModule } from '../prime/prime.module';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CardsComponent } from './components/cards/cards.component';

import { NgxAllInOneAlertsModule } from 'ngx-all-in-one-alerts';

@NgModule({
  declarations: [DefaultTableComponent, FilterComponent, CardsComponent],
  imports: [
    CommonModule,
    FormsModule,
    PrimeModule,
    NgxSkeletonLoaderModule,
    NgxAllInOneAlertsModule,
  ],
  exports: [
    FilterComponent,
    DefaultTableComponent,
    CardsComponent,
    NgxAllInOneAlertsModule,
  ],
})
export class SharedModule {}
