import { Component } from '@angular/core';

import { NavController, LoadingController, ModalController } from 'ionic-angular';

import { RestaurantServices } from '../../services/RestaurantServices';

import { Page2 } from '../page2/page2';
import { ModalContentPage } from  './modal-content';
import { Toast } from 'ionic-native';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
  providers: [RestaurantServices],
  entryComponents:[ Page2 ]
})
export class Page1 {
  public datas: Array<any>;
  private scroll: number = 1;
  public shouldHide:boolean;

  constructor(public navCtrl: NavController, public restaurantServices: RestaurantServices, public loadingCtrl: LoadingController, public modalCtrl: ModalController) {
    Toast.show("I'm a toast", '5000', 'bottom').subscribe(
      toast => {
        console.log(toast);
      }
    );
    let loader = this.loadingCtrl.create({
      content: "Attendez svp...",
      //duration: 1000
    });
    loader.present();
    this.restaurantServices.getData().subscribe(data => {
      this.shouldHide = data.page.next != null;
      this.datas = data.restaurants;
      console.log(data.restaurants);
    }, err => {
      console.log(err);
    }, () => {
      loader.dismiss();
      console.log('Complete')
    });
  }

  doRefresh(refresher) {
    setTimeout(() => {
      this.restaurantServices.getData().subscribe(data => {
        this.shouldHide = data.page.next != null;
        this.datas = data.restaurants ;
        this.scroll = 1;
      }, err => {
        console.log(err);
      }, () => {
        refresher.complete();
        console.log('Complete')
      });
    }, 500);
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.restaurantServices.getData(++this.scroll).subscribe(data => {
        this.shouldHide = data.page.next != null;
        this.datas = this.datas.concat(data.restaurants);
      }, err => {
        console.log(err);
      }, () => {
        infiniteScroll.complete();
        console.log('Complete')
      });
    }, 250);
  }

  goToDetails(detailsResto){
    this.navCtrl.push(Page2, {item:detailsResto});
  }

  presentModal(dataResto) {
    let modal = this.modalCtrl.create(ModalContentPage, dataResto);
    modal.present();
  }

}
