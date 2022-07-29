import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { TypeConfirm } from '../types/typeconfirm';
import { TypeForm } from '../types/typeform';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  autheticated:boolean = false;
  load:boolean = false;
  exactly:boolean = true;// Authentication password is incorrect

  login(form:TypeForm){
    if(this.load){
      return;
    }
    this.load = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.gmail, form.password)
      .then((userCredential) => {
        // Signed in 
        this.router.navigate(['']);
        this.autheticated = true;
        console.log(userCredential);

        // ...
      })
      .catch((error) => {
        this.autheticated = false;
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally(
        ()=> {this.load = false}
      );
  }

  register(form: TypeConfirm){
    if(this.load){
      return;
    }
    if(form.password !== form.confirm_password)
    {
      this.exactly = false;
    }
    else {
      this.load = true;
      this.exactly = true;
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, form.gmail, form.password)
      .then((userCredential) => {
        // Signed in 
        this.autheticated = true;
        // ...
      })
      .catch((error) => {
        this.autheticated = false;
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      })
      .finally(() =>{
        this.load = false;
      }

      );
    }
  }
  logout(){
    
  const auth = getAuth();
  signOut(auth).then(() => {
    this.autheticated = false;
    this.router.navigate(['login']);
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });

    }
}