import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoNovoPage } from './produto-novo.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoNovoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoNovoPageRoutingModule {}
