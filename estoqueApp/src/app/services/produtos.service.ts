import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../Models/Produto.model';
import { catchError, EMPTY, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  url = `http://localhost:3000/produtos`;

  constructor(private http: HttpClient) { }

   create(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(this.url, produto).pipe(
      map(retorno => retorno),
      catchError((erro) => this.exibirErroProdutos(erro))
    )
  }

  getAll():Observable<Produto[]>{
    return this.http.get<Produto[]>(this.url).pipe(
      map(retorno => retorno),
      catchError((error) => this.exibirErroProdutos(error))
    );
  }

  getOne(id:number):Observable<Produto>{
    return this.http.get<Produto>(`${this.url}/${id}`).pipe(
      map(retorno => retorno),
      catchError((erro) => this.exibirErroProdutos(erro))
    );
  }

  update(produto: Produto):Observable<Produto>{
    return this.http.post<Produto>(`${this.url}/${produto.id}`, produto).pipe(
      map(retorno => retorno),
      catchError((erro) => this.exibirErroProdutos(erro))
    );
  }

  delete(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }

  exibirErroProdutos(error: any):Observable<any>{
    alert("Algo Ocorreu errado");
    console.log(error);
    return EMPTY;
  }  
}
