import { Component, OnInit } from '@angular/core';
import {CartsService} from "../../carts.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
/**
 * Typescript-Datei für jedes einzelne Produkt*/
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;

  constructor(private cartService : CartsService) { }

  /**
   * der Preis alle Produkte  Warenkob
   * */

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.products=res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  /**
   * löscht Ein Bestimmte Produkt in der Warenkob
   * */
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }

  /**
   * löscht alle Produkte in der Warenkob
   * */
  emptycart(){
    this.cartService.removeAllCart();
  }

}
