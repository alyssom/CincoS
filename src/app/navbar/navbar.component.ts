import { Component, OnInit } from '@angular/core';
import { GerenciadorDeUsuariosService } from '../gerenciador-de-usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public service: GerenciadorDeUsuariosService, private router: Router) { }

  ngOnInit() {
  }

  
  logout(){
    this.service.logout();
  }

  home(){
    this.router.navigate(['home']);
  }
  cadastro(){
    this.router.navigate(['cadastroFuncionarios'])
  }

}
