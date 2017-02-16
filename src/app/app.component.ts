import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen, HeaderColor, Toast, Network } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Accueil', component: Page1 }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //StatusBar.styleDefault();
      HeaderColor.tint("#ffe560");
      StatusBar.overlaysWebView(true);
      StatusBar.backgroundColorByHexString('#a97b1a');

      Splashscreen.hide();

      // check internet connection
      Toast.showWithOptions({
        message: `Connexion : ${Network.type}`,
        duration: 5000,
        position: 'bottom',
        styling: { backgroundColor: '#FFF8D6', textColor: '#291400' }
      }).subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
