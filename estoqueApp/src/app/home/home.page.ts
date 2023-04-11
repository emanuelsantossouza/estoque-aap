import { Component } from '@angular/core';
import { async } from '@angular/core/testing';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink],
})
export class HomePage {
  constructor(private ClientesService: ClientesService) {
    this.buscarClientes();
  }

  async buscarClientes() {

    await this.ClientesService.getAll().subscribe((dados) =>{ 
      console.log(dados);
    });
  }
}
