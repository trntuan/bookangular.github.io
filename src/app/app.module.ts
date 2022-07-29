import { NgModule } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';
import { BookService } from './book/book.service';
import { CartComponent } from './cart/cart.component';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AuthModule } from './auth/auth.module';
@NgModule({
  declarations: [
    AppComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BookModule,
    AppRoutingModule,
    ButtonModule,
    AuthModule
  ],

  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
