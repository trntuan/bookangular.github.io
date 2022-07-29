import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { AuthService } from './auth/auth.service';
import { firebaseConfig } from './firebase.config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private authService: AuthService){}

    isAutheticated(){
      return this.authService.autheticated;
    }

    ngOnInit(): void {
      initializeApp(firebaseConfig);
    }

    logout(){
      this.authService.logout();
    }
  title = 'myApp';

}
