import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../_model/Product';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MasterService {
  private baseURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  GetAllProduct() {
    return this.http.get<Product[]>(this.baseURL + '/product/all');
  }
  CreateProduct(product: Product) {
   return this.http.post(this.baseURL + '/product/add', product);
  }
  UpdateProduct(product: Product) {
    return this.http.put(this.baseURL + '/product/update?id='+product.id, product);
  }
  DeleteProduct(id:number) { console.log('deleteProduct ' +id);
    return this.http.delete(this.baseURL + '/product/delete/'+id);
  }
  GetProductById(id:number) {
    return this.http.get<Product>(this.baseURL + '/product/find/'+id);
  }
  GetProductByGtin(gtin:number) {
    return this.http.get<Product>(this.baseURL + '/product/findgtin/'+gtin);
  }
  haveaccess() {
    return true;
  }
}
