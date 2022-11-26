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
}
