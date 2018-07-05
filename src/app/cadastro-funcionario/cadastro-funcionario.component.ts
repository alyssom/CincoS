import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  constructor(private db: AngularFirestore) { 
  }

  ngOnInit() {
  }

  Enviou(funcionario){
    this.db.collection('funcionarios/').add(funcionario.form.value);
  }

}
