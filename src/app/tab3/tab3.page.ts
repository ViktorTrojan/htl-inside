import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, IonTabs } from '@ionic/angular';
import { NavParams } from '@ionic/angular'; 

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page{
  
  constructor(private navCtrl: NavController, private tabs: IonTabs, private activatedRoute: ActivatedRoute) {}

  ionViewDidEnter() {
    const param1 = this.activatedRoute.snapshot.queryParamMap.get('param1');
    console.log('Param 1:', param1);
  }

  goToTab2(){
    this.tabs.select("tab2")
  }
}
