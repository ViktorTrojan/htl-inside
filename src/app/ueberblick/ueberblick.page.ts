import { Component, OnInit } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import API from '../api-instance';

@Component({
  selector: 'app-ueberblick',
  templateUrl: './ueberblick.page.html',
  styleUrls: ['./ueberblick.page.scss'],
})
export class UeberblickPage implements OnInit {

  constructor(private tabs: IonTabs) { }

  maleCount: any;
  femaleCount: any;

  maleWidth: any;
  femaleWidth: any;

  ngOnInit() {
    API.getMaleCount().then((maleData) => {
      API.getFemaleCount().then((femaleData) => {
        this.maleCount = maleData;
        this.femaleCount = femaleData;

        this.maleWidth = (this.maleCount / (this.maleCount + this.femaleCount)) * 100;
        this.femaleWidth = (this.femaleCount / (this.maleCount + this.femaleCount)) * 100;
      });
    });
  }

  goToLandingPage() {
    this.tabs.select("tab2");
  }

  goToSettings() {
    this.tabs.select("settings");
  }

}
