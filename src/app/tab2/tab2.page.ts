import { Component, OnInit } from '@angular/core';
import axios, { AxiosRequestConfig } from "axios";
import { NavController, IonTabs } from '@ionic/angular';
import { getAllSchueler, getSchueler } from 'src/axios-instance';

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

  constructor(private navCtrl: NavController, private tabs: IonTabs) {

  }
  async fetchAllSchueler() {
    const users = await getAllSchueler();
    console.log(users);
    
  }

  async fetchSchueler(id: number) {
    const user = await getSchueler(id);
    console.log(user);
  }

  async getAllSchueler(){
    try{
      const response = await axios.get("https://api.susnext.com/getMainPage");
      console.log(response.data)
      return response.data;
    }catch (error){
      console.error(error)
    }
  }

  goToTab3() {
    this.tabs.select("tab3");
  }

  goToUeberblick() {
    this.tabs.select("ueberblick");
  }
}

