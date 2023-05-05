import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Cliente } from '../Models/Cliente.model';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  url = `http://localhost:3000/clientes`;

  constructor(private http: HttpClient, private alertCtnl: AlertController) { }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.url, cliente).pipe( // O pipe realiza varias funções de tratamento
      map(retorn => retorn),
      catchError((erro) => this.exibirError(erro))
    );
  }

  getAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url).pipe( // O pipe realiza varias funções de tratamento
      map(retorn => retorn),
      catchError((erro) => this.exibirError(erro))
    );
  }

  getOne(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.url}/${id}`).pipe( // O pipe realiza varias funções de tratamento
      map(retorn => retorn),
      catchError((erro) => this.exibirError(erro))
    );
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.url}/${cliente.id}`, cliente).pipe( // O pipe realiza varias funções de tratamento
      map(retorn => retorn),
      catchError((erro) => this.exibirError(erro))
    );
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }


  exibirError(erro: any): Observable<any> {
    const titulo = "Erro na conexão!"
    const msg = `Verifique a sua conexão ou informe ao suporte o erro: ${erro.status}`;;

    return EMPTY;
  }

  async presentAlert(titulo: string, msg: string) {
    const alert = await this.alertCtnl.create({
      header: titulo,
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
