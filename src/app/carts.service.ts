import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor() { }


  public cartItemList:any=[];
  public productList = new BehaviorSubject<any>([]);


/**
 * gitb der Preis alle Produkte  im Warenkob züruck
  */
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.price;
    })
    return grandTotal;
  }

/**
 *Liste alle Produkte im warenKorb
 * */
  getProducts(){
    return this.productList.asObservable();
  }

  /***
   * legt ein Produkt im Warenkorb
   * @param product
   */
  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);

  }
  /**
   * löscht Ein Bestimmte Produkt in der Warenkob
   * */
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  /**
   * löscht alle Produkte in der Warenkob
   * */

  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
