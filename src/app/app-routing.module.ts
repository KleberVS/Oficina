import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'produtos',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./produtos/produtos.module').then( m => m.ProdutosPageModule)
  },
  {
    path: 'produto-detalhes/:id',
    loadChildren: () => import('./produto-detalhes/produto-detalhes.module').then( m => m.ProdutoDetalhesPageModule)
  },
  {
    path: 'produto-novo',
    loadChildren: () => import('./produto-novo/produto-novo.module').then( m => m.ProdutoNovoPageModule)
  },
  {
    path: 'produto-edit',
    loadChildren: () => import('./produto-edit/produto-edit.module').then( m => m.ProdutoEditPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
