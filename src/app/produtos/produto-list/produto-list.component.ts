import { ProdutoService } from '../shared/produto.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from '../shared/produto';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {
  @Input()
  putProduto: Produto;

  token: string;
  produto: Produto[] = [];
  readonly displayedColumns = [
    'nome','fornecedor','valor', 'acoes'
  ];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.token = window.localStorage.getItem('token');
    this.produtoService.getAll(this.token).subscribe(produto => {
      this.produto = produto;
    });
  }
  remove(produto: Produto) {
    this.produtoService.delete(produto.id, this.token).subscribe((e) => {
      console.log(e);
    });
  }
  onCompletedCheckChange(putProduto: Produto) {
    this.produtoService.save(putProduto, this.token).subscribe(putProduto => {
      console.log(putProduto);
    });
  }
}
