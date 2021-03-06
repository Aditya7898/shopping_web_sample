import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input('shopping-cart') shoppingCart; 
  @Input('product') product;
  @Input('show-actions') showActions = true;


  constructor(private cartService : ShoppingCartService) { }


  addToCart(product: Product){ 
    this.cartService.addToCart(product);
  }

  removeFromCart(){
    this.cartService.removeFromCart(this.product);
  }

  getQuantity(){

    if(!this.shoppingCart) return 0;

    let item = this.shoppingCart.items[this.product.$key]
    return item ? item.quantity : 0;
  }
}
