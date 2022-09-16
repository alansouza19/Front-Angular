
import { AuthGuard } from './account/shared/auth.guard';
import { LoginComponent } from './account/login/login.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { HomeComponent } from './layout/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoFormComponent as ProdutoFormComponent } from './produtos/produto-form/produto-form.component';
import { ProdutoListComponent } from './produtos/produto-list/produto-list.component';




const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children:[

      { path: '', component: ProdutoListComponent },
      { path: 'cadastro', component: ProdutoFormComponent },
      { path: 'altera/:id', component: ProdutoFormComponent }
    ],
    canActivate:[AuthGuard]
  },
  {
    path:'',
    component: AuthenticationComponent,
    children:[
      {path:'', redirectTo:'login', pathMatch:'full'},
      {path: 'login', component: LoginComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
