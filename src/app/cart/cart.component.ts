import { Component, OnInit } from '@angular/core';
// formBuilder permet de générer des controls
import { FormBuilder } from '@angular/forms';
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
  checkoutForm;

  constructor(
    // injection du service cart pour pouvoir l'utiliser et l'afficher
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
      // recuperation dans la propriete local items du tableau items stocke dans le service cart: 
      this.items = this.cartService.getItems();

      // Grace au FormBuilder on instancie le checkoutForm (initialisé à '')
      this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
   }

  ngOnInit() {

  }

    onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    // On vide le panier :
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}