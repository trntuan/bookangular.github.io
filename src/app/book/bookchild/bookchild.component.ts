import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { styleBook } from '../../types/types';

@Component({
  selector: 'app-bookchild',
  templateUrl: './bookchild.component.html',
  styleUrls: ['./bookchild.component.scss']
})
export class BookchildComponent implements OnInit {

  @Input() book = {} as styleBook;
  // @Output() valueEmitter = new EventEmitter<styleBook>();
  notbook: boolean = true;
  constructor(private cartService: CartService) {


  }


  listen(value: styleBook) {
    this.notbook = !this.notbook;
    this.cartService.add(value);
  }

  remove(value: styleBook) {
    this.notbook = !this.notbook;
    this.cartService.remove(value);

  }


  ngOnInit(): void {

  }

}








// import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { styleBook } from '../../types/types';


// @Component({
//     selector: 'app-bookchild',
//     templateUrl: './bookchild.component.html',
//     styleUrls: ['./bookchild.component.scss']
// })
// export class BookchildComponent implements OnInit {

//     @Input() book = {} as styleBook;
//     @Input() text: string = '';
//     @Output() valueEmitter = new EventEmitter<styleBook>();
//     constructor() { }
//     listen(value: styleBook) {
//         console.log(value)
//         this.valueEmitter.emit(value);
//     }
//     ngOnInit(): void {
//     }

// }
