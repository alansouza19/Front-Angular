import { ProdutoService } from '../shared/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../shared/produto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {
  produto: Produto = new Produto();
  title: string = 'Novo produto';
  token: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {
    this.token = window.localStorage.getItem('token');
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.produtoService.getById(id, this.token).subscribe(produto => {
        this.produto = produto;
        this.title = 'Alterando produto';
      });
    }
  }

  onSubmit() {
    this.produtoService.save(this.produto, this.token).subscribe(produto => {
      console.log(produto);
      this.router.navigate(['']);
    });
  }
}
