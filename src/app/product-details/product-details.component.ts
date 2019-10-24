import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';

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
  constructor(private route: ActivatedRoute,) { }

ngOnInit() {
  // A l'initialisation on valorise la propiete "product" 
  // product=
  this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
  });
}
}