import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Produto } from 'src/app/model/produto.model';
import { ProdutosService } from 'src/app/services/produtos.service';


@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.page.html',
  styleUrls: ['./produto-detalhes.page.scss'],
})
export class ProdutoDetalhesPage implements OnInit {
  public produto: Produto = new Produto();
  public produtoEdit: Produto = new Produto();

  public edicaoHabilitada: boolean = false;

  constructor(private rotaAtiva: ActivatedRoute,
              private rota: Router,
              private produtosService: ProdutosService) { }

  ngOnInit() {
    const codigo = Number(this.rotaAtiva.snapshot.paramMap.get('id'));
    console.log('Código do produto: '+codigo);

    this.produto = this.produtosService.getById(codigo);
  }

  public editar() {
    this.produtosService.edit(this.produtoEdit);
    this.rota.navigate(['/produtos']);
  }

  public editarOption() {
    this.edicaoHabilitada = true;
    this.produtoEdit.id = this.produto.id;
    this.produtoEdit.nome = this.produto.nome;
    this.produtoEdit.preco = this.produto.preco;
    this.produtoEdit.descricao = this.produto.descricao;
    this.produtoEdit.foto = this.produto.foto;
  }

  public cancelarOption() {
    this.edicaoHabilitada = false;
  }

  public deletar() {
    this.produtosService.delete(this.produto.id);
    this.rota.navigate(['/produtos']);
  }

}
