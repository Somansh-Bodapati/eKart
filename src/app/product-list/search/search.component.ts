import { Component } from '@angular/core';

@Component({
  selector: 'product-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string= 'Womens watch';

  updateSearchText(event: any){
    this.searchText = event.target.value;
  }
}
