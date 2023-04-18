import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';

import { SvgSettingsModule } from '../svg-settings/svg-settings.module';
import { SvgArrowleftModule } from '../svg-arrowleft/svg-arrowleft.module';
import { SvgGenderFemaleModule } from '../svg-gender-female/svg-gender-female.module';
import { SvgGenderMaleModule } from '../svg-gender-male/svg-gender-male.module';
import { SvgSportModule } from '../svg-sport/svg-sport.module';
import { SvgWeightModule } from '../svg-weight/svg-weight.module';
import { SvgRunModule } from '../svg-run/svg-run.module';
import { SvgSocialMediaModule } from '../svg-social-media/svg-social-media.module';
import { SvgSmokerModule } from '../svg-smoker/svg-smoker.module';
import { SvgAlkModule } from '../svg-alk/svg-alk.module';
import { SvgCodeLangModule } from '../svg-code-lang/svg-code-lang.module';
import { SvgLangModule } from '../svg-lang/svg-lang.module';
import { SvgHobbyModule } from '../svg-hobby/svg-hobby.module';
import { SvgSpecialModule } from '../svg-special/svg-special.module';
import { SvgOsModule } from '../svg-os/svg-os.module';
import { SvgBooksModule } from '../svg-books/svg-books.module';
import { SvgBrainModule } from '../svg-brain/svg-brain.module';
import { SvgHeightModule } from '../svg-height/svg-height.module';
import { SvgEmailComponent } from '../svg-email/svg-email.component';
import { SvgEmailModule } from '../svg-email/svg-email.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule,
    SvgSettingsModule,
    SvgArrowleftModule,
    SvgGenderFemaleModule,
    SvgGenderMaleModule,
    SvgSportModule,
    SvgWeightModule,
    SvgRunModule,
    SvgSocialMediaModule,
    SvgSmokerModule,
    SvgAlkModule,
    SvgCodeLangModule,
    SvgLangModule,
    SvgHobbyModule,
    SvgSpecialModule,
    SvgBooksModule,
    SvgOsModule,
    SvgBrainModule,
    SvgHeightModule,
    SvgEmailModule
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
