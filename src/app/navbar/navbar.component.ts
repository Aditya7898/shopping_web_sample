import { Component, OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';
import { ShoppingCartService } from '../shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from '../models/shopping-cart';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    
  appUser: AppUser;
  cart$:Observable<ShoppingCart>;
  // shoppingCartItemCount: number;

  constructor(public auth:AuthService, private shoppingCartServce: ShoppingCartService) { 
  
  }

  logout(){
    this.auth.logout();
  }

  async ngOnInit(){
    this.auth.appUser$.subscribe(appUser=> this.appUser=appUser);
    this.cart$  = await this.shoppingCartServce.getCart();
  }
}
