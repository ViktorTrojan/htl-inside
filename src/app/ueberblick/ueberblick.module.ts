import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UeberblickPageRoutingModule } from './ueberblick-routing.module';

import { UeberblickPage } from './ueberblick.page';
import { SvgSettingsComponent } from '../svg-settings/svg-settings.component';
import { SvgArrowleftComponent } from '../svg-arrowleft/svg-arrowleft.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UeberblickPageRoutingModule
  ],
  declarations: [UeberblickPage, SvgArrowleftComponent, SvgSettingsComponent]
})
export class UeberblickPageModule {}
