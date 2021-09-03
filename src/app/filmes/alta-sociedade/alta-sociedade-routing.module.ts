import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltaSociedadePage } from './alta-sociedade.page';

const routes: Routes = [
  {
    path: '',
    component: AltaSociedadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltaSociedadePageRoutingModule {}
