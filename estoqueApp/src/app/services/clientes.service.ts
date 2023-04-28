import { HttpClient, HttpClientModule } from '@angular/common/http';
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

  create(cliente: Cliente) {
    return this.http.post(this.url, cliente);
  }

  getAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url).pipe( // O pipe realiza varias funções de tratamento
      map(retorn => retorn),
      catchError((erro) => this.exibirError(erro))
    );
  }

  getOne(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  update(cliente: Cliente) {
    return this.http.put(`${this.url}/${cliente.id}`, cliente);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  login() { }

  logout() { }

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
