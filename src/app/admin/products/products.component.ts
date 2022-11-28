import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {catchError, map, Observable, of, startWith} from "rxjs";
import {Product} from "../../models/product.model";
import {DataEnumStatus, DataStatus} from "../../states/data.status";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$?: Observable<DataStatus<Array<Product>>>;
  productDataStatusEnum = DataEnumStatus;
  query?: string;

  page: number = 1;
  count: number = 0;
  tableSize: number = 6;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.onGetAllProducts();
  }

  onGetAllProducts() {
    this.products$ = this.productService.getAllProducts().pipe(
      map(data => ({status: DataEnumStatus.LOADED, data: data})),
      startWith({status: DataEnumStatus.LOADING}),
      catchError((error) => of({status: DataEnumStatus.ERROR, errorMessage: error.message}))
    )
  }

  onGetAvailableProducts() {
    this.products$ = this.productService.getAvailableProducts().pipe(
      map(data => ({status: DataEnumStatus.LOADED, data: data})),
      startWith({status: DataEnumStatus.LOADING}),
      catchError((error) => of({status: DataEnumStatus.ERROR, errorMessage: error.message}))
    )
  }

  onGetSelectedProducts() {
    this.products$ = this.productService.getSelectedProducts().pipe(
      map(data => ({status: DataEnumStatus.LOADED, data: data})),
      startWith({status: DataEnumStatus.LOADING}),
      catchError((error) => of({status: DataEnumStatus.ERROR, errorMessage: error.message}))
    )
  }

  onSearch() {
    this.products$ = this.productService.getSearchProducts(this.query).pipe(
      map(data => ({status: DataEnumStatus.LOADED, data: data})),
      startWith({status: DataEnumStatus.LOADING}),
      catchError((error) => of({status: DataEnumStatus.ERROR, errorMessage: error.message}))
    )
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.onGetAllProducts();
  }

  handleDeleteProduct(p: Product) {

  }


}
