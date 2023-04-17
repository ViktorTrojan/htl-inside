import { Component, OnInit } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-ueberblick',
  templateUrl: './ueberblick.page.html',
  styleUrls: ['./ueberblick.page.scss'],
})
export class UeberblickPage implements OnInit {

  constructor(private tabs: IonTabs) {}

  ngOnInit() {
  }

  goToLandingPage() {
    this.tabs.select("tab2");
  }

  goToSettings() {
    this.tabs.select("settings");
  }

}
