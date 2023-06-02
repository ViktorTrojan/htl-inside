import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { NavController, IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  check: boolean = false;
  constructor(private navCtrl: NavController, private tabs: IonTabs) {

  }

  goToTab2() {
    this.check = true;
    this.tabs.select("tab2");
  }

  ionViewDidEnter() {
    if(this.check){
      this.tabs.select("tab2");
    }
  }

}
