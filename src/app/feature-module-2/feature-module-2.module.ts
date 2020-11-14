import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModule2RoutingModule } from './feature-module-2-routing.module';
import { FirstPageComponent } from './pages/first-page/first-page.component';

@NgModule({
  declarations: [FirstPageComponent],
  imports: [CommonModule, FeatureModule2RoutingModule],
})
export class FeatureModule2Module {}
