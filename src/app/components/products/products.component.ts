import { Component, OnInit } from '@angular/core';
import{Products} from "../../product";
import {Productinterface} from "../../productinterface";
import {CartsService} from "../../carts.service";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  selectedProduct?: Productinterface;

  products = Products;
  constructor(private cartService:CartsService) { }

  ngOnInit(): void {
  }
  onSelect(product: Productinterface): void {

    this.selectedProduct=product;
  }


 /**
  * legt ein Produkt in den warenkorb
  * */
  addtoCart(item: any){
    this.cartService.addtoCart(item);
  }

}
