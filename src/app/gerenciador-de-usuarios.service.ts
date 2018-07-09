import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorDeUsuariosService {

  public user;



  constructor(public afAuth: AngularFireAuth, private router: Router) { 
    
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
