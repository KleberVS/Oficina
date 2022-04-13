import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoEditPageRoutingModule } from './produto-edit-routing.module';

import { ProdutoEditPage } from './produto-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoEditPageRoutingModule
  ],
  declarations: [ProdutoEditPage]
})
export class ProdutoEditPageModule {}
