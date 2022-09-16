import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './account/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { HomeComponent } from './layout/home/home.component';
import { ProdutoFormComponent } from './produtos/produto-form/produto-form.component';

import { ProdutoListComponent } from './produtos/produto-list/produto-list.component';




@NgModule({
  declarations: [
    AppComponent,
    ProdutoListComponent,
    ProdutoFormComponent,
    LoginComponent,
    HomeComponent,
    AuthenticationComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
