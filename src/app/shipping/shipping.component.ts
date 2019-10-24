import { Component, OnInit } from '@angular/core';
// utilisation du service cart (panier) :
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
// proprité qui contient les frais de port du panier :
shippingCosts;

  constructor(
// on va utiliser le service cart (panier) pour obtenir les frais de port :
    private cartService: CartService
  ) { }

  ngOnInit() {
    // récupération des frais de port :
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}