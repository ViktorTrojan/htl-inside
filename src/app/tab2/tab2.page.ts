import { Component, OnInit } from '@angular/core';
import axios, { AxiosRequestConfig } from "axios";
import { NavController, IonTabs } from '@ionic/angular';
import API from '../api-instance';

interface Student {
  vname: string;
  nname: string;
  age: number;
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

  constructor(private navCtrl: NavController, private tabs: IonTabs) {}

  async getAllSchueler(){
    return API.getAllSchuelers();
  }

  goToTab3() {
    this.tabs.select("tab3");
  }

  goToUeberblick() {
    this.tabs.select("ueberblick");
  }
}

