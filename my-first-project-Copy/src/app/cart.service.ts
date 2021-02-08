import { Inject, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class CartService implements OnInit {

  private cartURL = "http://127.0.0.1:8393/api/cart/item";

  items = [];
  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    private http: HttpClient
  ) { }

  ngOnInit(){
    this.items = this.storage.get('myCart') ? this.storage.get('myCart') : [];
  }
/*
// for local storage
//Adding data to cart
  addToCart(product){
    this.items.push(product);
    this.storage.set("myCart", this.items);
    
  }
*/

  addToCart(product){
   //debugger;
    return this.http.post<string>(this.cartURL, product)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    return throwError(err.error);
  }

//getting data from the cart
  getItems(){
    this.storage.get("myCart");
    return this.items;
  }

//clear the cart data
  clearCart(){
    this.items = [];
    this.storage.remove("myCart");
    return this.items;
  }

  getShippingPrices(){
    return this.http.get('./assets/shipping.json');
  }

}