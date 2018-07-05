import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastroFuncionarios', component: CadastroFuncionarioComponent }
  ];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ]
})


export class AppRoutingModule {
  
 }
