import { Component, OnInit, Renderer2 } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  selectedTheme = localStorage.getItem("selectedTheme") || 'dark'; // set the default theme to 'dark' or load from localstorage

  constructor(private tabs: IonTabs, private renderer: Renderer2) { }

  ngOnInit() {
  }

  goToLandingPage() {
    this.tabs.select("tab2");
  }

  changeTheme(theme: string) {
    this.selectedTheme = theme;
    localStorage.setItem("selectedTheme", theme); // save the selected theme in localStorage
    this.renderer.setAttribute(document.body, 'color-theme', theme);
  }

}
