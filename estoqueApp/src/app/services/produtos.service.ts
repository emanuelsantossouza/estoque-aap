import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  url = `http://localhost:3000/produtos`;

  constructor(private http: HttpClient) { }

  // create(produtos: Produto){
  //   return this.http.post(this.url, produtos)
  // }

  getAll(){
    return this.http.get(this.url);
  }

  getOne(id:number){
    return this.http.get(`${this.url}/${id}`);
  }

  
}
