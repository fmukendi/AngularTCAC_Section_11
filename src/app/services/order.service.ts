import { Injectable } from '@angular/core';
import { AuthHttp } from "angular2-jwt";
import { Headers, RequestOptions, Http} from '@angular/http';

@Injectable()
export class OrderService {

  constructor(private authHttp: AuthHttp, private http: Http) {
  }

  getOrders() {
    return this.authHttp.get('/api/orders')
      .map(response => response.json());
  }

  getOrdersOld() {
    let headers = new Headers();
    let token = localStorage.getItem('token');
    headers.append('Autorization', 'Bearer' + token);


    let options = new RequestOptions({ headers: headers});


    return this.http.get('/api/orders', options)
      .map(response => response.json());
  }
}
