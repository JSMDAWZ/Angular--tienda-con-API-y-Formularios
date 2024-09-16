import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL = 'https://fakestoreapi.com/products';

  constructor(private _httpClient: HttpClient) { }

  public getAllProducts(): Observable<IProduct[]> { // devuelve observable de array de productos completo
    return this._httpClient.get<IProduct[]>(`${this.baseURL}`);
  }

  public getProductById(id: number): Observable<IProduct> { // devuelve observable de un producto por id
    return this._httpClient.get<IProduct>(`${this.baseURL}/${id}`);
  }

  public getAllCategories(): Observable<Category[]> { // devuelve un array de categorias
    return this._httpClient.get<Category[]>(`${this.baseURL}/category/${Category}`);
  }

  public newProduct(product: IProduct): Observable<IProduct> { // crea un producto (POST)
    return this._httpClient.post<IProduct>(`${this.baseURL}`, product);
  }

  public updateProduct(id: number, product: IProduct): Observable<IProduct> { // actualiza un producto (PUT)
    return this._httpClient.put<IProduct>(`${this.baseURL}/${id}`, product);
  }

  public deleteProduct(id: number): Observable<IProduct> { // elimina un producto (DELETE)
    return this._httpClient.delete<IProduct>(`${this.baseURL}/${id}`);
  } 
}
