import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltaSociedadePageRoutingModule } from './alta-sociedade-routing.module';

import { AltaSociedadePage } from './alta-sociedade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AltaSociedadePageRoutingModule
  ],
  declarations: [AltaSociedadePage]
})
export class AltaSociedadePageModule {}
