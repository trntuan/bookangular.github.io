import { Injectable } from '@angular/core';
import { styleBook } from '../types/types';

@Injectable()
export class BookService {

  constructor() { }

  getBook(): styleBook[] {
    return [
      {
        title: 'Angular 10 by Example 2021',
        content: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications...',
        src: 'https://m.media-amazon.com/images/I/41Y0hnvzrYL.jpg'
      },
      {
        title: 'Ng-book The Complete Book on Angular 8',
        content: 'Angular applications are modular and Angular has its own modularity system called NgModules. NgModules are containers for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities. They can contain components, service providers, and other code files whose scope is defined by the containing NgModule. They can import functionality that is exported from other NgModules, and export selected functionality for use by other NgModules...',
        src: 'https://m.media-amazon.com/images/I/51OucWzOf9L.jpg'
      },
      {
        title: 'Learn Angular In 24 Hours',
        content: 'A component controls a patch of screen called a view. It consists of a TypeScript class, an HTML template, and a CSS style sheet. The TypeScript class defines the interaction of the HTML template and the rendered DOM structure, while the style sheet describes its appearance...',
        src: 'https://danielk.tech/images/l/e/a/r/n/learn-angular-in-24-hours-03c8beba.jpeg'
      },
      {
        title: 'The Angular WorkShop',
        content: 'A component controls a patch of screen called a view. It consists of a TypeScript class, an HTML template, and a CSS style sheet. The TypeScript class defines the interaction of the HTML template and the rendered DOM structure, while the style sheet describes its appearance...',
        src: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/8386/9781838645533.jpg'
      },
    ]
  }
}
