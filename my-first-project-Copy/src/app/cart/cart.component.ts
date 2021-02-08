import { Component, Inject, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // items = this.cartService.getItems();
  items = [];
  checkoutForm = this.formBuilder.group({
    name: ['', Validators.required],
    address: ['', Validators.required]
  })
  
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private router: Router,
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {
    this.items = this.storage.get("myCart");
  }

  routeTo400(){
    this.router.navigateByUrl('page-not-found');
  }

  routeTo500(){
    this.router.navigateByUrl('internal-server-error');
  }

  routeToGenericError(){
    this.router.navigateByUrl('error');
  }

  onSubmit(): void{
    //Clear the Cart
    this.items = this.cartService.clearCart();
    console.warn('Your oder has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

   removeItem(productNumber){
    this.items.splice(productNumber,1);
    this.storage.set("myCart", this.items);
    this.items = this.storage.get("myCart");
  }

}