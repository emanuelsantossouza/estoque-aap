import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Produto } from 'src/app/Models/Produto.model';

@Component({
  selector: 'app-alterar-produtos',
  templateUrl: './alterar-produtos.page.html',
  styleUrls: ['./alterar-produtos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AlterarProdutosPage implements OnInit {

  id!: number;
  nome: string = "";
  descricao: string = "";
  nome_imagem: string = "";
  preco: number = 0;

  constructor(
    private activedRoute: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutosService) { }

  ngOnInit() {
    this.id = this.activedRoute.snapshot.params[`id`];

    this.produtoService.getOne(this.id).subscribe((dados) => {
      console.log(dados)

      this.nome = dados.nome as string;
      this.descricao = dados.descricao as string;
      this.preco = dados.preco as number;
      this.nome_imagem = dados.nome_imagem as string;
    })
  }

  salvarAlteracaoProduto() {
    const produto: Produto = {
      nome: this.nome,
      descricao: this.descricao,
      preco: this.preco,
      nome_imagem: this.nome_imagem
    }

    this.produtoService.create(produto).subscribe((dados) => {
      console.log(dados)
      alert("Alteração com sucesso!!")
    })

  }
}
