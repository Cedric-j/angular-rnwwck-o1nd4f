import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
// Import de notre service cart (panier) :
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  // définition de la propriete product
  product;
  // on ajout route: ActivatedRoute, comme paramètre du constructeur :
  // (ActivatedRoute correspond au path défini dans app.module.ts)
  constructor(
    private route: ActivatedRoute,
    // injection de notre service cart 
    private cartService: CartService
    ) { }

ngOnInit() {
  // A l'initialisation on valorise la propiete "product" 
  // product=
  this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
  });
}

  // methode d'ajout d'un product dans le panier en appelant la methode addToCart service cartService
  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

}
