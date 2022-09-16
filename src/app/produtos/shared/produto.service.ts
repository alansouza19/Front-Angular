import { environment } from '../../../environments/environment';
import { Produto } from './produto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getAll(token: string) {
    const headers:any = new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
    })
    return this.http.get<Produto[]>(`${environment.api}/api/produtos`, {headers:headers});
  }

  getById(id: string, token:string) {
    const headers:any = new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
    })
    return this.http.get<Produto>(`${environment.api}/api/produtos/${id}`, {headers:headers});
  }

  save(produto: Produto, token:string) {
    const produtoBody = {
      nome: produto.nome,
      fornecedor: produto.fornecedor,
      valor: produto.valor
    };
    const headers:any = new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
    })

    if (produto.id) {
      return this.http.put<Produto>(`${environment.api}/api/produtos/${produto.id}`, produtoBody, {headers:headers});
    } else {
      return this.http.post<Produto>(`${environment.api}/api/produtos/cadastro`, produtoBody, {headers:headers});
    }
  }

  delete(id: string, token: string) {
    const headers:any = new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
    })
    return this.http.delete(`${environment.api}/api/produtos/delete/${id}`,{headers:headers});
  }
}
