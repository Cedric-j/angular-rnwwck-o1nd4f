
/// un service est l'endroit ou on stocke les donnees et methodes partagees par les differentes parties de l'application 
import { Injectable } from '@angular/core';

//Import de HttpClient pour interagir avec des API externes
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class CartService {
  // definition d'une propriete items qui contiendra les ojets du panier
  items = [];

  constructor(
    private http: HttpClient
  ) { }

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

  // Grace à l'import de HttpClient, cette méthode va pouvoir lire le fichier des frais de port par url (retourne un stream)
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}