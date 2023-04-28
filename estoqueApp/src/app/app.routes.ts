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
    path: 'create-cliente',
    loadComponent: () => import('./Pages/create-cliente/create-cliente.page').then( m => m.CreateClientePage)
  },


];
