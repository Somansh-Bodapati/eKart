import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'product-search',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string= ' ';

  updateSearchText(event: any){
    this.searchText = event.target.value;
  }
}
