import { Component } from '@angular/core';
import {RouterOutlet, ɵEmptyOutletComponent} from '@angular/router';
import {ProductCardComponent} from './products/product-card/product-card.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ɵEmptyOutletComponent, ProductCardComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  products = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
      name: 'Apple iPhone 16 Pro Max 256Gb Black',
      description: 'The flagship iPhone 16 Pro Max has absorbed the best features of a modern gadget. This is the most productive device in the Apple iPhone line with a large display, amazing performance and incredible external ergonomics. The iPhone 16 Pro Max is a real titan in its family.',
      price: 685666,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
      rating: 3.89,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-256gb-chernyi-123887732/?c=750000000&tab=reviews',
      commentsNumber: 379
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
      name: 'Apple iPhone 16 Pro Max 256Gb Gold',
      description: 'The flagship iPhone 16 Pro Max has incorporated the best features of a modern gadget. This is the most productive device in the Apple iPhone line with a large display, amazing performance and incredible external ergonomics.',
      price: 652988,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000',
      rating: 4.58,
      commentsNumber: 517,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000&tab=reviews'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h2e/64206204993566.jpg?format=gallery-medium',
      name: 'Apple iPhone 13 128Gb Blue',
      description: 'The Apple iPhone 13 features a 6.1-inch Super Retina XDR display, which boasts incredibly high pixel density—photos, videos, and text look amazingly clear.',
      price: 652988,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000',
      rating: 5.00,
      commentsNumber: 1759,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000&tab=reviews'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h47/87295471124510.png?format=gallery-medium',
      name: 'Apple iPhone 16 128Gb White',
      description: 'Phone 16 – new design, bright colors, powerful processor and fresh iOS 18 with artificial intelligence. This iPhone offers even more possibilities than its predecessors, taking the basic model to another level: better, more interesting, more convenient.',
      price: 418062,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-belyi-123726722/?c=750000000',
      rating: 5.00,
      commentsNumber: 133,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-belyi-123726722/?c=750000000&tab=reviews'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/hc6/87295487770654.png?format=gallery-medium',
      name: 'Apple iPhone 16 128Gb Silver',
      description: 'Phone 16 – new design, bright colors, powerful processor and fresh iOS 18 with artificial intelligence. This iPhone offers even more possibilities than its predecessors, taking the basic model to another level: better, more interesting, more convenient.',
      price: 567502,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-128gb-serebristyi-123889795/?c=750000000',
      rating: 5.00,
      commentsNumber: 134,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-128gb-serebristyi-123889795/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hff/h64/87295472042014.png?format=gallery-medium',
      name: 'Apple iPhone 16 128Gb Purple',
      description: 'Phone 16 – new design, bright colors, powerful processor and fresh iOS 18 with artificial intelligence. This iPhone offers even more possibilities than its predecessors, taking the basic model to another level: better, more interesting, more convenient.',
      price: 417873,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-fioletovyi-123727182/?c=750000000',
      rating: 5.00,
      commentsNumber: 96,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-fioletovyi-123727182/?c=750000000&tab=reviews'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hab/h93/86303746392094.jpg?format=gallery-medium',
      name: 'Apple iPhone 15 256Gb Light Blue',
      description: 'Apple iPhone 15 is a smartphone that combines advanced optics, a powerful processor, a long-lasting battery and a memorable design.',
      price: 428520,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-256gb-goluboi-113137931/?c=750000000',
      rating: 4,
      commentsNumber: 228,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-15-256gb-goluboi-113137931/?c=750000000&tab=reviews'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3c/h70/63944536522782.jpg?format=gallery-medium',
      name: 'Apple iPhone 11 64Gb Slim Box Black',
      description: 'The functional and stylish Apple iPhone 11 smartphone in a metal case is capable of providing not only everyday communication and entertainment, but also productive work.',
      price: 234022 ,
      link: 'https://kaspi.kz/shop/p/apple-iphone-11-64gb-slim-box-chernyi-100692387/?c=750000000',
      rating: 4,
      commentsNumber: 1090,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-11-64gb-slim-box-chernyi-100692387/?c=750000000&tab=reviews'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha2/hc8/87295471714334.png?format=gallery-medium',
      name: 'Apple iPhone 16 128Gb Pink',
      description: 'Phone 16 – new design, bright colors, powerful processor and fresh iOS 18 with artificial intelligence. This iPhone offers even more possibilities than its predecessors, taking the basic model to another level: better, more interesting, more convenient.',
      price: 415600 ,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-rozovyi-123726806/?c=750000000',
      rating: 4,
      commentsNumber: 83,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-rozovyi-123726806/?c=750000000&tab=reviews'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h34/hc3/86303335350302.jpg?format=gallery-medium',
      name: 'Apple iPhone 15 256Gb Light Pink',
      description: 'Apple iPhone 15 is a smartphone that combines advanced optics, a powerful processor, a long-lasting battery and a memorable design. The smartphone has a dynamic island that displays notifications and other important information.',
      price: 447754,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-256gb-rozovyi-113137951/?c=750000000',
      rating: 5,
      commentsNumber: 166,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-15-256gb-rozovyi-113137951/?c=750000000&tab=reviews'
    }
  ]
}
