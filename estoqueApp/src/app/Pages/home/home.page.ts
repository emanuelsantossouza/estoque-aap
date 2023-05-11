import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router, RouterLink } from '@angular/router';
import { AlertController, IonicModule } from '@ionic/angular';
import { Cliente } from '../../Models/Cliente.model';
import { ClientesService } from '../../services/clientes.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, CommonModule, FormsModule],
})
export class HomePage {

  listaClientes: Cliente[] = [];

  listaUser!: boolean;
  addClient!: boolean;

  nomeCompleto: string = "";
  email: string = "";
  senha: string = '';
  confirmarSenha: string = '';
  alertController: any;

  constructor(private clientesService: ClientesService, private router: Router, private alertCtr: AlertController) {
    this.buscarClientes();
    this.listaUser = true
  }

  buscarClientes() {
    // ------ Sem o Observable no services --------
    // this.ClientesService.getAll().subscribe((dados) =>{
    //   this.listaClientes = dados as Cliente[];
    // });

    // ------ Com o Observable no services --------
    this.clientesService.getAll().subscribe((dados) => {
      console.log(dados)
      this.listaClientes = dados as Cliente[];
    })
  }

  alterarCliente(id:number){
    this.router.navigateByUrl(`/alterar-cliente/${id}`)
  }

  excluirCliente(id:number){
    return this.clientesService.delete(id).subscribe((dados) => {
      this.listaClientes = this.listaClientes.filter(c => c.id !== id);
    });
  }

  salvar() {
    if (this.senha == this.confirmarSenha) {
      const cliente: Cliente = {
        nome: this.nomeCompleto,
        email: this.email,
        senha: this.senha
      };

      this.clientesService.create(cliente).subscribe((dados) => {
        alert('Cliente Inserido com Sucesso ' + dados.id)
        this.router.navigateByUrl("/home")
      })
    } else {
      console.log("Erro!!!  confirmar senha está diferente de senha")
    }
  }

  addNewClienteTrue() {
    this.addClient = true;
    this.listaUser = false;
    return console.log(this.listaUser, this.addClient)
  }

  listaUserTrue() {
    this.listaUser = true;
    this.addClient = false;
    return console.log(this.listaUser, this.addClient)
  }


  async excluirUsuario(id: number) {
    const alert = await this.alertCtr.create({
      header: 'Tem certeza?',
      message: 'Você como usuario, tem certeza do que esta fazendo?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          handler: () => {
            this.excluirCliente(id);
          }
        }
      ]
    });

    await alert.present();
  }
}
