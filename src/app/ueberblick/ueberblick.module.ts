import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UeberblickPageRoutingModule } from './ueberblick-routing.module';

import { UeberblickPage } from './ueberblick.page';
import { SvgSettingsModule } from '../svg-settings/svg-settings.module';
import { SvgArrowleftModule } from '../svg-arrowleft/svg-arrowleft.module';
import { SvgPolygonOutlineModule } from '../svg-polygonoutline/svg-polygonoutline.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UeberblickPageRoutingModule,
    SvgSettingsModule,
    SvgArrowleftModule,
    SvgPolygonOutlineModule
  ],
  declarations: [UeberblickPage]
})
export class UeberblickPageModule {}
