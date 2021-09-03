import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QueenSlimPage } from './queen-slim.page';

const routes: Routes = [
  {
    path: '',
    component: QueenSlimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QueenSlimPageRoutingModule {}
