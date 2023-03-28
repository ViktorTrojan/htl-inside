import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SvgQuestionComponent } from '../svg-question/svg-question.component';
import { SvgInfoComponent } from '../svg-info/svg-info.component';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { SvgSettingsModule } from '../svg-settings/svg-settings.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    SvgSettingsModule
  ],
  declarations: [Tab2Page, SvgQuestionComponent, SvgInfoComponent]
})
export class Tab2PageModule {}
