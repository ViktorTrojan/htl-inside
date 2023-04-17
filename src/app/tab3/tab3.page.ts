import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, IonTabs } from '@ionic/angular';
 

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  constructor(private navCtrl: NavController, private tabs: IonTabs, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
      this.activatedRoute.params.subscribe(params => {
        const test = params["myParam"]
        console.log(params)
      })
  }

  goToTab2(){
    this.tabs.select("tab2")
  }
}
