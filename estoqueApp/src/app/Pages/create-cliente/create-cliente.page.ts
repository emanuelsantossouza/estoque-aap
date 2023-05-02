import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cliente } from 'src/app/Models/Cliente.model';
import { ClientesService } from 'src/app/services/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.page.html',
  styleUrls: ['./create-cliente.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CreateClientePage implements OnInit {

  nomeCompleto:string = "";
  email:string = "";
  senha:string= '';
  confirmarSenha:string= '';


  constructor(private clienteService: ClientesService, private router: Router) { }

  salvar(){
    if(this.senha == this.confirmarSenha){
      const cliente: Cliente = {
        nome: this.nomeCompleto,
        email: this.email,
        senha: this.senha
      };

      this.clienteService.create(cliente).subscribe((dados) =>{
        alert('Cliente Inserido com Sucesso ' + dados.id)
        this.router.navigateByUrl("/home")
      })
    } else{
      console.log("Erro!!!  confirmar senha está diferente de senha")
    }
  }

  ngOnInit() {
  }

}
