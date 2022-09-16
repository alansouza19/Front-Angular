import { Router } from '@angular/router';
import { AccountService } from './../shared/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login={
  login:'',
  password: ''
}
  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
  }
async onSubmit(){
  console.log("Passei aqui");
  try {
    const result = await this.accountService.login(this.login);
    console.log(`Login efetuado: ${result}`);

    this.router.navigate(['']);
  } catch (error) {
    console.log("Deu ruim");
  }
}

}
