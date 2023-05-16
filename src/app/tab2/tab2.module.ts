import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SvgQuestionModule } from '../svg-question/svg-question.module';
import { SvgInfoModule } from '../svg-info/svg-info.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { SvgSettingsModule } from '../svg-settings/svg-settings.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    SvgSettingsModule,
    SvgQuestionModule,
    SvgInfoModule,
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
