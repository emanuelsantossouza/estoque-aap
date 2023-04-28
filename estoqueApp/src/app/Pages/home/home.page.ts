import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { async } from '@angular/core/testing';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Cliente } from '../../Models/Cliente.model';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, CommonModule],
})
export class HomePage {

  listaClientes: Cliente[] = [];


  constructor(private ClientesService: ClientesService) {
    this.buscarClientes();
  }

  buscarClientes() {

    // ------ Sem o Observable no services --------
    // this.ClientesService.getAll().subscribe((dados) =>{ 
    //   this.listaClientes = dados as Cliente[];
    // });

    // ------ Com o Observable no services --------
    this.ClientesService.getAll().subscribe((dados) => {
      this.listaClientes = dados;
    })
  }
}
