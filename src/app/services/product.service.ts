import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  host = environment.hostUrl;

  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.host + '/products');
  }

  getAvailableProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.host + '/products?available=true');
  }

  getSelectedProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.host + '/products?selected=true');
  }

  getSearchProducts(query?: string): Observable<Array<Product>> {
    console.log('inside service ', query);
    if (query == '' || query == undefined) {
      throw new Error('Required Parameter : query was null or defined when calling search')
    }
    return this.http.get<Array<Product>>(this.host + '/products?name_like=' + query);
  }
}
