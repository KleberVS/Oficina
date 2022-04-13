import { Injectable } from '@angular/core';
import { Produto } from '../model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  public produtos: Array<Produto> = [
    {
      id: 0,
      nome: 'chave de fenda',
      preco: 20.0,
      foto: './../../assets/img/car-parts/bolt.jpg',
      descricao: 'Ferramenta de manutenção'
    },
    {
      id: 1,
      nome: 'Parafuso',
      preco: 2.0,
      foto: './../../assets/img/car-parts/bolt.jpg',
      descricao: 'Peça'
    },
    {
      id: 2,
      nome: 'Bateria',
      preco: 150.0,
      foto: './../../assets/img/car-parts/battery.jpg',
      descricao: 'Componente da parte elétrica'
    },
    {
      id: 3,
      nome: 'Amortecedor',
      preco: 180.0,
      foto: './../../assets/img/car-parts/amortecedor.jpg',
      descricao: 'Componente do sistema de suspensão'
    }
  ];
  
  constructor() { }

  public getAll() {
    return this.produtos;
  }

  public getById(id: number) {
    for(let obj of this.produtos) {
      if (obj.id === id) {
        return obj;
      }
    }
  }

  public add(produto: Produto) {
    produto.id = this.produtos.length;
    this.produtos.push(produto);
  }

  public edit(produto: Produto) {
    const id = produto.id;

    for(let obj of this.produtos) {
      if (obj.id === id) {
        obj.nome = produto.nome;
        obj.preco = produto.preco;
        obj.descricao = produto.descricao;
        obj.foto = produto.foto;
        break;
      }
    }
  }

  public delete(id: number) {
    let posicao = 0;

    posicao= this.produtos.findIndex((produto)=> produto.id === id);

    // for(let obj of this.produtos) {
    //   if (id === obj.id) {
    //     break;
    //   } else {
    //     posicao++;
    //   }
    // }

    if (posicao > -1)
     this.produtos.splice(posicao, 1);
  }
}
