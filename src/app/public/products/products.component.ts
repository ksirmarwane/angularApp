import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product.model";
import {catchError, map, Observable, of} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  //products? : Array<Product>;
  products$?: Observable<Array<Product>>

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.onGetAllProducts();
  }

  // old version when using products? : Array<Product>;
  //   onGetAllProducts(){
  //     this.productService.getAllProducts().subscribe(
  //       (data) => {
  //         this.products = data;
  //         console.log("this.products", this.products);
  //       },
  // (error) => {
  //         console.log(error);
  //       }
  //       );
  //   }

  // this methode return Observable<Array<Product>>
  // Using "of" to return Observable containing a 1-item table that has the same structure as the Product.
  onGetAllProducts() {
    this.products$ = this.productService.getAllProducts().pipe(
      map(data => {
        return data
      }),
      catchError(err => {
        return of([{id: -1, name: err.message}]);
      })
    );
  }

}
