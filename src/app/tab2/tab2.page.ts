import { Component, OnInit } from '@angular/core';
import axios, { AxiosRequestConfig } from "axios";
import { NavController, IonTabs } from '@ionic/angular';
import API from '../api-instance';
import { Router } from '@angular/router';


interface Student {
  id: number;
  vname: string;
  nname: string;
  age: number;
  foto: string;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  students: Student[] = [];
  
  ngOnInit() {
    this.getAllSchueler().then((data: Student[]) => {
      this.students = data;
    });
  }  

  constructor(private navCtrl: NavController, private tabs: IonTabs, private router: Router) {}

  async getAllSchueler(){
    return API.getAllSchuelers();
  }

  goToTab3() {
    const param1 = '190181';
    this.router.navigate(['/tabs/tab3'], { queryParams: { param1} });
  }

  goToUser(id: number){
    this.router.navigate(['/tabs/tab3'], { queryParams: { id } });
  }

  goToUeberblick() {
    this.tabs.select("ueberblick");
  }

  goToSettings() {
    this.tabs.select("settings");
  }
}

