import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {
        this.product =products[+params.get("productId")]
      }, 
      err => {
        console.log("Some error")
      }
    )
  }

  /*
  // for in memory / storage
  addToCart(product){
    this.cartService.addToCart(product);
    window.alert('The product has been added to the cart!');
  }
*/
  //for integration with node rest service
  addToCart(product) {

    this.cartService.addToCart(product).subscribe(() => {
      window.alert('The product has been added to the cart!');
    }, error => {
      console.log('There is error while adding item.');
    });
  }

}