import { Component } from '@angular/core';
import {SearchComponent} from './search/search.component';
import {NgForOf} from '@angular/common';
import {of} from 'rxjs';


@Component({
  selector: 'product-list',
  standalone: true,
  imports: [SearchComponent, NgForOf],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  listOfString: string[] = ['Mark', 'Steve', 'Harry', 'John', 'Sarah'];
}

  //name = "John Doe";
  //addToCart = 0;
  /*product = {
    name: 'iPhone X',
    price: 789,
    color: 'Black',
    discount: 8.5,
    inStock: 3,
  }*/

  /*getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount / 100)
  }

  onValueEntered(event: any) {
    //this.name = event.target.value;
    //console.log(event.target.value);
  }

  increment(){
    if (this.addToCart < this.product.inStock) {
      this.addToCart++;
    }
  }

  decrement(){
    if (this.addToCart > 0) {
      this.addToCart--;
    }
  }
}*/
