import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';

import { BookComponent } from './book.component';
import { BookService } from './book.service';
import { BookchildComponent } from './bookchild/bookchild.component';


@NgModule({
  declarations: [BookComponent, BookchildComponent],
  providers: [BookService],
  imports: [CommonModule, FormsModule, ButtonModule],
  exports: [BookComponent],
})

export class BookModule { }
