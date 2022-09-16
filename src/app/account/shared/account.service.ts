import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  async login(user: any){
   console.warn("Ta aqui");
    const result = await this.http.post<any>(`${environment.api}/login`, user).toPromise();
    console.log(result);
    if(result && result.token){
      console.log("Entrou, com retorno " + result);
      window.localStorage.setItem('token', result.token);
      return true;
    }
    return false;
  }
  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }
}
