import { Component, OnInit } from '@angular/core';
import { TypeConfirm } from 'src/app/types/typeconfirm';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  form:TypeConfirm = {
    gmail : '',
    password: '',
    confirm_password:''
  }
 

  submit(){
    this.authService.register(this.form);
    }
    
  exactly()
    {
     return this.authService.exactly;
    }
  load()
  {
    return this.authService.load;
  }

}


