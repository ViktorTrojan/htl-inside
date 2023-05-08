import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, IonTabs, Platform } from '@ionic/angular';
import API from '../api-instance';
import { NavParams } from '@ionic/angular'; 

interface Student {
  id: number;
  kid: number;
  email: string;
  vname: string;
  nname: string;
  geschlecht: string;
  gebdat: string;
  gewicht: number;
  groesse: number;
  os: string;
  anzahlsport: number;
  raucher: number;
  alkie: number;
  lfach: string;
  bwunsch: string;
  itwissen: string;
  sazeit: number;
  sprachen: number;
  anzProg: number;
  mediennutzung: number;
  biografie: string;
  foto: string;
  age: number;
  daysTillNextBirthday: number;
}

interface Hobbies {
  hobby: string;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page{
  id: number = 0;
  students: Student[] = [];
  hobbies: Hobbies[] = [];

  constructor( private platform: Platform, private navCtrl: NavController, private tabs: IonTabs, private activatedRoute: ActivatedRoute) {
    this.backButtonEvent();
  }


  async getSchueler(id: number){
    return API.getSchueler(id);
  }

  async getHobbies(id: number){
    return API.getHobbies(id);
  }

  ionViewDidEnter() {
    const param1 = this.activatedRoute.snapshot.queryParamMap.get('id');
    this.id = Number(param1);
    console.log(this.id)
    this.getSchueler(this.id).then((data: Student[]) => {
      this.students = data;
    });
    this.getHobbies(this.id).then((data: Hobbies[]) =>{
      this.hobbies = data
    })
    
  }

  goToTab2(){
    this.tabs.select("tab2")
  }

  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.tabs.select("tab2");
    });
  }

  goToSettings() {
    this.tabs.select("settings");
  }
}
