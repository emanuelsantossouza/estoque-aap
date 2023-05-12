import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./Pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'produtos',
    loadComponent: () => import('./Pages/produtos/produtos.page').then( m => m.ProdutosPage)
  },
  {
    path: 'alterar-cliente/:id',
    loadComponent: () => import('./Pages/alterar-cliente/alterar-cliente.page').then( m => m.AlterarClientePage)
  },
  {
    path: 'alterar-produtos/:id',
    loadComponent: () => import('./Pages/alterar-produtos/alterar-produtos.page').then( m => m.AlterarProdutosPage)
  },

];
