import { Component, OnInit } from '@angular/core';
import { GerenciadorDeUsuariosService } from '../gerenciador-de-usuarios.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user;


  funcionarios;
  portaria;
  recepcao;
  salaVermelha;
  salaAmarela;
  salaAzul;
  salaRoxa;

  constructor(public service: GerenciadorDeUsuariosService) {
    if(this.service.user != undefined){
      this.user = this.service.user.user;
      console.log(this.user)
    }

    this.funcionarios = service.funcionarios;
    this.portaria = service.portaria;
    this.recepcao = service.recepcao;
    this.salaVermelha = service.salaVermelha;
    this.salaAmarela = service.salaAmarela;
    this.salaAzul = service.salaAzul;
    this.salaRoxa = service.salaRoxa;
    
  }

  ngOnInit() {
    }

}
