import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TheGrandHotelBudapestPage } from './the-grand-hotel-budapest.page';

const routes: Routes = [
  {
    path: '',
    component: TheGrandHotelBudapestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TheGrandHotelBudapestPageRoutingModule {}
