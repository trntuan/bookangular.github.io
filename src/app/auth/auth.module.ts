import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from "@angular/forms";
import { DividerModule } from "primeng/divider";
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    PasswordModule,
    FormsModule,
    DividerModule,
    ButtonModule,
    RippleModule,
    FormsModule
  ]
})
export class AuthModule { }
//