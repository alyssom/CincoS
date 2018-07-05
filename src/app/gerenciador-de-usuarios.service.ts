import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorDeUsuariosService {

  public user;

  public  funcionarios: Observable<any[]>;
  public portaria: Observable<any[]>;
  public recepcao: Observable<any[]>;
  public salaVermelha: Observable<any[]>;
  public salaAmarela: Observable<any[]>;
  public salaAzul: Observable<any[]>;
  public salaRoxa: Observable<any[]>;

  constructor(public afAuth: AngularFireAuth, private router: Router, public db: AngularFirestore) { 
    
    this.funcionarios = this.db.collection('funcionarios').valueChanges();
    this.salaVermelha = this.db.collection('funcionarios', ref => ref.where('sala', '==', 'VERMELHA')).valueChanges();
    this.salaAmarela = this.db.collection('funcionarios', ref => ref.where('sala', '==', 'AMARELA')).valueChanges();
    this.salaAzul = this.db.collection('funcionarios', ref => ref.where('sala', '==', 'AZUL')).valueChanges();
    this.salaRoxa = this.db.collection('funcionarios', ref => ref.where('sala', '==', 'ROXA')).valueChanges();
    this.portaria = this.db.collection('funcionarios', ref => ref.where('sala', '==', 'PORTARIA')).valueChanges();
    this.recepcao = this.db.collection('funcionarios', ref => ref.where('sala', '==', 'RECEPÇÃO')).valueChanges();

  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    .then(user => {
        this.user = user;
        if(this.user.user.displayName == "Alyssom Falkenberg" || this.user.user.displayName == "Sonia Vargas"){
          this.router.navigate(['home'])
        }
    }).catch(error => {
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);

    });
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate([''])
  }

 

}
