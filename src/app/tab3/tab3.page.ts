import { Component, OnInit } from '@angular/core';
import { NavController, IonTabs } from '@ionic/angular';
 

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page{
 
  constructor(private navCtrl: NavController, private tabs: IonTabs) {}

  goToTab2(){
    this.tabs.select("tab2")
  }
}
