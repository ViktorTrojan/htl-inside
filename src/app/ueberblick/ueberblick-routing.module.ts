import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UeberblickPage } from './ueberblick.page';

const routes: Routes = [
  {
    path: '',
    component: UeberblickPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UeberblickPageRoutingModule {}
