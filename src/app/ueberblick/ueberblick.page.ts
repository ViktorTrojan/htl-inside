import { Component, OnInit } from '@angular/core';
import { IonTabs, Platform} from '@ionic/angular'; 
import { Router } from '@angular/router';
import API from '../api-instance';

@Component({
  selector: 'app-ueberblick',
  templateUrl: './ueberblick.page.html',
  styleUrls: ['./ueberblick.page.scss'],
})

export class UeberblickPage implements OnInit {

  constructor(private platform: Platform, private tabs: IonTabs, private router: Router) { 
    this.backButtonEvent();
  }

  teacher: any;
  classInfo: any;

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

    API.getTeacher().then((data: any) => {
      this.teacher = data;
    });

    API.getClassInfo().then((data: any) => {
      this.classInfo = data;
    });
  }

  goToTab2() {
    this.router.navigate(['/tabs/tab1']);
  }

  goToSettings() {
    this.tabs.select("settings");
  }

  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.tabs.select("tab1");
    });
  }

}
