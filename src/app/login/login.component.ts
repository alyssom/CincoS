import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { Router } from '@angular/router';
import { GerenciadorDeUsuariosService } from '../gerenciador-de-usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user;
  constructor(public afAuth: AngularFireAuth, private router: Router, public service: GerenciadorDeUsuariosService) { }

  ngOnInit() {
  }
   
  login(){
    this.service.login();
  }
  
  
}
