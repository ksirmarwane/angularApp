import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {map, Observable} from "rxjs";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$?: Observable<Array<Product>>;

  page: number = 1;
  count: number = 0;
  tableSize: number = 8;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.onGetAllProduct();
  }

  onGetAllProduct() {
    this.products$ = this.productService.getAllProducts().pipe(
      map(data => {
        return data
      })
    )
  }

  handleDeleteProduct(p: Product) {

  }

  onTableDataChange(event: any) {
    this.page = event;
    this.onGetAllProduct();
  }
}
