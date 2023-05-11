import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-alterar-produtos',
  templateUrl: './alterar-produtos.page.html',
  styleUrls: ['./alterar-produtos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AlterarProdutosPage implements OnInit {

  id: number =0;
  nome_produto: string = "";
  descricao_produto: string = "";
  nome_imagem: string = "";
  preco: number = 0;

  constructor(
    private activedRoute: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutosService) { }

  ngOnInit() {
    this.id = this.activedRoute.snapshot.params[`id`];

    
  }

}
