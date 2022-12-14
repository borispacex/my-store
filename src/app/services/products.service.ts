import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpclient: HttpClient) { }

  getAllProducts() {
    return this.httpclient.get<Product[]>('https://fakestoreapi.com/products')
  }
}
