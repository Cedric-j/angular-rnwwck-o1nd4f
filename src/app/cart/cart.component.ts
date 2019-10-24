import { Component, OnInit } from '@angular/core';
// import du service cart (panier)
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // 
  items;

  constructor(
    // injection du service cart pour pouvoir l'utiliser et l'afficher
    private cartService: CartService
  ) { }

  ngOnInit() {
    // recuperation dans la propriete local items du tableau items stocke dans le service cart: 
    this.items = this.cartService.getItems();
  }

}