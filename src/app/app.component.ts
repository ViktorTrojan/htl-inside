import { Component, OnInit, Renderer2 } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private renderer: Renderer2) {
    const hideStatusBar = async () => {
      await StatusBar.setOverlaysWebView({ overlay: true });
    };

    hideStatusBar();
  }
  

  ngOnInit() {
    const selectedTheme = localStorage.getItem("selectedTheme") || 'dark'; // set the default theme to 'dark' or load from localstorage
    this.renderer.setAttribute(document.body, 'color-theme', selectedTheme);
  }

 
}
