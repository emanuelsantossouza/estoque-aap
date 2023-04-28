import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProdutosService } from '../../services/produtos.service';
import { Produto } from '../../Models/Produto.model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProdutosPage implements OnInit {

  listaProdutos: Produto[] = []

  constructor(private produtoService: ProdutosService) {
    this.buscarTodos();
   }

  ngOnInit() {
  }

  buscarTodos(){
    this.produtoService.getAll().subscribe((dados) => {
      this.listaProdutos = dados as Produto[];
    });
  }
}
