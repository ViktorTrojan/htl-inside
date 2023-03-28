import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UeberblickPageRoutingModule } from './ueberblick-routing.module';

import { UeberblickPage } from './ueberblick.page';
import { SvgArrowleftComponent } from '../svg-arrowleft/svg-arrowleft.component';
import { SvgSettingsModule } from '../svg-settings/svg-settings.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UeberblickPageRoutingModule,
    SvgSettingsModule
  ],
  declarations: [UeberblickPage, SvgArrowleftComponent]
})
export class UeberblickPageModule {}
