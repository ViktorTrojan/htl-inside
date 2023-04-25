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
  searchVal: string = "";

  
  ngOnInit() {
    this.getAllSchueler().then((data: Student[]) => {
      this.students = data;
    });
  }  

  constructor(private navCtrl: NavController, private tabs: IonTabs, private router: Router) {}

  async getAllSchueler(){
    return API.getAllSchuelers();
  }

  isValid(name: string){
    if(name === ""){
      return true;
    }else{
      const schueler = this.students.find((student) => student.vname == name || student.nname == name || student.vname + " " + student.nname == name);
      if(schueler === undefined){
        return false;
      }else{
        return true;
      }
    }
    
  }
  getSearchedSchueler(name: string){
    const schueler = this.students.filter((student) => student.vname == name || student.nname == name || student.vname + " " + student.nname == name);
    return schueler;
  }

  goToTab3() {
    var randomUser = Math.floor(Math.random() * (this.students.length - 1 + 1) + 1);
    console.log(randomUser)
    const id = this.students[randomUser].id;
    console.log(id)
    this.router.navigate(['/tabs/tab3'], { queryParams: { id } });
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

  searchInput(val: string){
    this.searchVal = val;
  }
}

