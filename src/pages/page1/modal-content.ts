import {Component} from '@angular/core';

import {Platform, NavParams, ViewController, NavController} from 'ionic-angular';
import {Page2} from '../page2/page2';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal-content.html'
})
export class ModalContentPage {
  restaurant;
  public page: any;

  constructor(public navCtrl: NavController,
              public platform: Platform,
              public params: NavParams,
              public viewCtrl: ViewController,) {
    this.page = Page2;
    this.restaurant = this.params.get('restaurant');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  openPage(page) {
    this.navCtrl.push(page, {restaurant: this.restaurant});
  }
}
