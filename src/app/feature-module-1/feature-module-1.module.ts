import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModule1RoutingModule } from './feature-module-1-routing.module';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { PrimeModule } from '../prime/prime.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FirstPageComponent],
  imports: [
    CommonModule,
    FeatureModule1RoutingModule,
    PrimeModule,
    SharedModule,
  ],
})
export class FeatureModule1Module {}
