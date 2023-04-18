import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, IonTabs } from '@ionic/angular';
import API from '../api-instance';
import { NavParams } from '@ionic/angular'; 

interface Student {
  id: number;
  kid: number;
  email: string;
  vname: string;
  nname: string;
  geschlecht: string;
  gebdate: string;
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

  constructor(private navCtrl: NavController, private tabs: IonTabs, private activatedRoute: ActivatedRoute) {}


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
}
