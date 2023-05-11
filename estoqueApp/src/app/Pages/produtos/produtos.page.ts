import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
import { ProdutosService } from '../../services/produtos.service';
import { Produto } from '../../Models/Produto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProdutosPage implements OnInit {

  listaProdutos: Produto[] = [];

  listProducts!: boolean;
  addProducts!: boolean;

  nome_produto: string = "";
  descricao_produto: string = "";
  nome_imagem: string = "";
  preco: number = 0;

  constructor(
    private produtoService: ProdutosService,
    private router: Router,
    private alertCtrl: AlertController) {

    this.buscarTodos();
    this.listProducts = true;
  }

  ngOnInit() {
  }

  buscarTodos() {
    this.produtoService.getAll().subscribe((dados) => {
      this.listaProdutos = dados as Produto[];
    });
  }

  alterarProduto(id: number) {
    this.router.navigateByUrl(`/alterar-produtos/${id}`)
  }

  excluirProduto(id: number) {
    return this.produtoService.delete(id).subscribe((dados) => {
      this.listaProdutos = this.listaProdutos.filter(p => p.id_produto !== id);
    });
  }

  salvarProduto() {
    const produto: Produto = {
      nome_produto: this.nome_produto,
      descricao_produto: this.descricao_produto,
      nome_imagem: this.nome_imagem,
      preco: this.preco
    };

    this.produtoService.create(produto).subscribe((dados) => {
      alert('Cliente Inserido com Sucesso ' + dados)
      this.router.navigateByUrl("/produto")
    })
  }


  listaProductsTrue() {
    this.listProducts = true;
    this.addProducts = false;
  }

  addNewProductsTrue() {
    this.listProducts = false;
    this.addProducts = true;
  }

  async AlertExcluirProduto(id: number) {
    const alert = await this.alertCtrl.create({
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
            this.excluirProduto(id);
          }
        }
      ]
    });

    await alert.present();
  }
}
