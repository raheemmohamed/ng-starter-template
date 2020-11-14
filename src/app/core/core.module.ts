import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideNavigationComponent,
    ErrorPageComponent,
  ],
  imports: [CommonModule, CoreRoutingModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideNavigationComponent,
    ErrorPageComponent,
  ],
})
export class CoreModule {}
