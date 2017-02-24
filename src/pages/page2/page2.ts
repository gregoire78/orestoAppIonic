import {Component} from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  private restaurant: any;
  private todo : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    // If we navigated to this page, we will have an item available as a nav param
    this.restaurant = this.navParams.get('restaurant');
    console.log(this.restaurant);

    this.todo = this.formBuilder.group({
      name: [this.restaurant.name, Validators.required],
      description: [this.restaurant.description, Validators.required],
      longitude: [this.restaurant.longitude, Validators.compose([Validators.maxLength(5), Validators.minLength(5), Validators.pattern('[0-9]*')])],
      latitude: [this.restaurant.latitude, Validators.compose([Validators.maxLength(5), Validators.minLength(5), Validators.pattern('[0-9]*')])],
      address: [this.restaurant.location.address, Validators.required],
      city: [this.restaurant.location.city, Validators.required],
      postal_code: [this.restaurant.location.postal_code, Validators.required],
    });

    /*// Let's populate this page with some filler content for funzies
     this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
     'american-football', 'boat', 'bluetooth', 'build'];

     this.items = [];
     for (let i = 1; i < 11; i++) {
     this.items.push({
     title: 'Item ' + i,
     note: 'This is item #' + i,
     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
     });
     }*/
  }

  /*  itemTapped(event, item) {
   this.navCtrl.push(Page2, {
   item: item
   });
   }*/

  logForm() {
    console.log(this.todo.value)
  }
}
