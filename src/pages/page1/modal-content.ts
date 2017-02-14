import { Component } from '@angular/core';

import { Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal-content.html'
})
export class ModalContentPage {
  restaurant;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    this.restaurant = this.params.get('restaurant');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
