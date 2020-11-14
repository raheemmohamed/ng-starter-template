import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './pages/first-page/first-page.component';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: FirstPageComponent },
      {
        path: 'details:/:id',
        component: null,
        children: [
          { path: '', redirectTo: 'sub-child', pathMatch: 'full' },
          { path: 'sub-child', component: null },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureModule1RoutingModule {}
