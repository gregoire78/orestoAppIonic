/**
 * Created by gregoire on 06/02/2017.
 */
import {Http} from '@angular/http';
import 'rxjs/Rx';

export class RestaurantServices {
  static get parameters() {
    return [[Http]];
  }

  constructor(private http: Http) {

  }
  getData(page: number = 1) {
    return this.http.get(`http://api.gregoirejoncour.xyz/restaurants/${page}?key=da39a3ee5e6b4b0d3255bfef95601890afd80709`)
      .map(response => response.json());
  }
}
