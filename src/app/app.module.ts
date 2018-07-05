import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { key } from './firebase.credencial';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    CadastroFuncionarioComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(key.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [AngularFirestoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
