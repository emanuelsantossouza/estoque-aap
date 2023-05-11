import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente } from 'src/app/Models/Cliente.model';

@Component({
  selector: 'app-alterar-cliente',
  templateUrl: './alterar-cliente.page.html',
  styleUrls: ['./alterar-cliente.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AlterarClientePage implements OnInit {

  id: number = 0;
  nome: string = "";
  email: string = "";
  senha: string = '';
  confirmarSenha: string = '';

  constructor(
    private activedRoute: ActivatedRoute,
    private router: Router,
    private clienteService: ClientesService
  ) { }

  ngOnInit() {
    this.id = this.activedRoute.snapshot.params[`id`];

    this.clienteService.getOne(this.id).subscribe((dados) => {
      this.nome = dados.
      this.email = dados.email ? dados.email : '';
    })
  }

  salvar() {
    if (this.senha == this.confirmarSenha) {
      const cliente: Cliente = {
        id: this.id,
        nome: this.nome,
        email: this.email,
        senha: this.senha
      };

      this.clienteService.update(cliente).subscribe((dados) => {
        alert('Alterado ' + dados.id)
        this.router.navigateByUrl("/home")
      })
    } else {
      console.log("Erro!!!  confirmar senha está diferente de senha")
    }
  }
}
