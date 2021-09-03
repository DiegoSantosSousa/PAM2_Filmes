import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TheGrandHotelBudapestPageRoutingModule } from './the-grand-hotel-budapest-routing.module';

import { TheGrandHotelBudapestPage } from './the-grand-hotel-budapest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TheGrandHotelBudapestPageRoutingModule
  ],
  declarations: [TheGrandHotelBudapestPage]
})
export class TheGrandHotelBudapestPageModule {}
