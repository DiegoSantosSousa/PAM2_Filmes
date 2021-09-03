import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QueenSlimPageRoutingModule } from './queen-slim-routing.module';

import { QueenSlimPage } from './queen-slim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QueenSlimPageRoutingModule
  ],
  declarations: [QueenSlimPage]
})
export class QueenSlimPageModule {}
