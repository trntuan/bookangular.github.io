import { Injectable } from '@angular/core';
import { styleBook } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  cart: styleBook[] = [];

  add(value: styleBook) {
    this.cart.push(value);
  }

  getCart() {
    return this.cart;
  }

  remove(value: styleBook) {
    this.cart = this.cart.filter((b) => b != value);
  }



}
