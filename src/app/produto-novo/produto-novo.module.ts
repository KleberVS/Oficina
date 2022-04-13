import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoNovoPageRoutingModule } from './produto-novo-routing.module';

import { ProdutoNovoPage } from './produto-novo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoNovoPageRoutingModule
  ],
  declarations: [ProdutoNovoPage]
})
export class ProdutoNovoPageModule {}
