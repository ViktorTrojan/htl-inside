import { Component, OnInit, Renderer2 } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  selectedTheme = 'dark';

  constructor(private tabs: IonTabs, private renderer: Renderer2) { }

  ngOnInit() {
  }

  goToLandingPage() {
    this.tabs.select("tab2");
  }

  changeTheme(theme: string) {
    this.selectedTheme = theme;
    this.renderer.setAttribute(document.body, 'color-theme', theme);
  }

}
