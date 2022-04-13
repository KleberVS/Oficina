import { Component, OnInit } from '@angular/core';

import { Produto } from 'src/app/model/produto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  public produtos: Array<Produto> = [ ];

  constructor(private produtosServico: ProdutosService) { }

  ngOnInit() {
    this.produtos = this.produtosServico.getAll();
  }

}
