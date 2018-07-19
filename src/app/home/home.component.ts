import { Component, OnInit } from '@angular/core';
import { GerenciadorDeUsuariosService } from '../gerenciador-de-usuarios.service';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user;

   public funcionarios: Observable<any[]>;
   public portaria: Observable<any[]>;
   public recepcao: Observable<any[]>;
   public salaVermelha: Observable<any[]>;
   public salaAmarela: Observable<any[]>;
   public salaAzul: Observable<any[]>;
   public salaRoxa: Observable<any[]>;
    
  constructor(public service: GerenciadorDeUsuariosService, public router: Router, public db: AngularFirestore) {
   
    
    this.funcionarios = db.collection('funcionarios').valueChanges();
    this.salaVermelha = db.collection('funcionarios', ref => ref.where('sala', '==', 'VERMELHA')).valueChanges();
    this.salaAmarela = db.collection('funcionarios', ref => ref.where('sala', '==', 'AMARELA')).valueChanges();
    this.salaAzul = db.collection('funcionarios', ref => ref.where('sala', '==', 'AZUL')).valueChanges();
    this.salaRoxa = db.collection('funcionarios', ref => ref.where('sala', '==', 'ROXA')).valueChanges();
    this.portaria = db.collection('funcionarios', ref => ref.where('sala', '==', 'PORTARIA')).valueChanges();
    this.recepcao = db.collection('funcionarios', ref => ref.where('sala', '==', 'RECEPÇÃO')).valueChanges();


  }

  ngOnInit() {
    
  }

  funcionario;
  decrementa(funcionario, tipo){
    if(tipo == "desperdicio"){
      funcionario.pontosDesperdicio--;
    }else if(tipo == "disciplina"){
      funcionario.pontosDisciplina--;
    }else if(tipo == "organizacao"){
      funcionario.pontosOrganizacao--;
    }else if(tipo == "limpeza"){
      funcionario.pontosLimpeza--;
    }else if(tipo == "padrao"){
      funcionario.pontosPadrao--;
    }
    this.funcionario = funcionario;
    
  }

  incrementa(funcionario, tipo){
    
      if(tipo == "desperdicio"){
        funcionario.pontosDesperdicio++;
      }else if(tipo == "disciplina"){
        funcionario.pontosDisciplina++;
      }else if(tipo == "organizacao"){
        funcionario.pontosOrganizacao++;
      }else if(tipo == "limpeza"){
        funcionario.pontosLimpeza++;
      }else if(tipo == "padrao"){
        funcionario.pontosPadrao++;
      }
      this.funcionario = funcionario;
    
  }
  salvar(){
    const swal = require('sweetalert2')

      if(this.funcionario != undefined){
        let nome = this.funcionario.nome;
        let pontosDesperdicio = this.funcionario.pontosDesperdicio;
        let pontosDisciplina = this.funcionario.pontosDisciplina;
        let pontosOrganizacao = this.funcionario.pontosOrganizacao;
        let pontosLimpeza = this.funcionario.pontosLimpeza;
        let pontosPadrao = this.funcionario.pontosPadrao;
        let id = this.funcionario.id;
        let cargo = this.funcionario.cargo;
        let email = this.funcionario.email;
        let sala = this.funcionario.sala;
        let idade = this.funcionario.idade;
        let mediaFuncionario = (pontosDesperdicio + pontosDisciplina + pontosLimpeza + pontosOrganizacao + pontosPadrao) / 5;

        let item = {id, nome, pontosDesperdicio, pontosDisciplina, pontosOrganizacao, pontosLimpeza, pontosPadrao, mediaFuncionario, cargo, email, sala, idade}; 
        this.db.collection('funcionarios', ref => ref.where('id', '==', this.funcionario.id)).doc(this.funcionario.id).set(item)
        swal({
          position: 'center',
          type: 'success',
          title: 'Nota alterada com sucesso!',
          showConfirmButton: false,
          timer: 2000
        })
      }else{
        swal(
          'Oops...',
          'Acho que você não tem nada para ser salvo.',
          'error'
        )
      }    
  }

}
