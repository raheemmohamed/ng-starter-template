import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadService } from './shared/services/preload.service';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { LoginComponent } from './layouts/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'feature-module-1', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'feature-module-1',
    loadChildren: () =>
      import('./feature-module-1/feature-module-1.module').then(
        (m) => m.FeatureModule1Module
      ),
    data: { preload: true },
  },
  {
    path: 'feature-module-2',
    loadChildren: () =>
      import('./feature-module-2/feature-module-2.module').then(
        (m) => m.FeatureModule2Module
      ),
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadService,
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
})
export class AppRoutingModule {}
