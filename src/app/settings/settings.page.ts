import { Component, OnInit } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private tabs: IonTabs) { }

  ngOnInit() {
  }

  goToLandingPage() {
    this.tabs.select("tab2");
  }

}
