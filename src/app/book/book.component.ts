import { Component, OnInit } from '@angular/core';
import { styleBook } from '../types/types';
import { BookService } from './book.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  colorH: string = '';
  valueP = '';

  books: styleBook[] = [];
  constructor(bookService: BookService) {
    this.books = bookService.getBook();
  }

  ngOnInit(): void {
  }

  addlisten(value: styleBook): void {
    console.log(value);
  }




}
