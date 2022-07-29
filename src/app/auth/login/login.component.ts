import { Component, OnInit } from '@angular/core';
import { TypeForm } from 'src/app/types/typeform';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private authService :AuthService){

    }
    form:TypeForm = {
      gmail : '',
      password: '',
      
    }
  

    submit(){
     this.authService.login(this.form);
    }

    load()
    {
      return this.authService.load;
    }

  ngOnInit(): void {
  }

}
