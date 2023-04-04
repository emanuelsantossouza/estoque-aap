import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  url = `http://localhost:3000/clientes`;

  constructor(http: HttpClientModule) {}

  create(){}

  getAll(){}

  getOne(){}

  update(){}

  delete(){}
}
