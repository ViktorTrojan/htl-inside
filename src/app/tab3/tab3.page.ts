import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, IonTabs } from '@ionic/angular';
 

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
 
  id: any;
  constructor(private navCtrl: NavController, private tabs: IonTabs, private storage: Storage) {}


  ngOnInit() {
    console.log(this.storage.getItem("id"))
  }
  

  goToTab2(){
    this.tabs.select("tab2")
  }
}
