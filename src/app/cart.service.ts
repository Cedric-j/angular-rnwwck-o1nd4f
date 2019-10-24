
/// un service est l'endroit ou on stocke les donnees et methodes partagees par les differentes parties de l'application 
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CartService {
  // definition d'une propriete items qui contiendra les ojets du panier
  items = [];
  constructor() { }

  // methode pour ajouter un objet au panier
  addToCart(product) {
    this.items.push(product);
  }

  // getter 
    getItems() {
    return this.items;
  }

  // Reset du panier
  clearCart() {
    this.items = [];
    return this.items;
  }

}