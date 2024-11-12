import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {TopMenuComponent} from './header/top-menu/top-menu.component';
import {ProductListComponent} from './product-list/product-list.component';
import {FormsModule} from '@angular/forms';

// @ts-ignore
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    TopMenuComponent,
    ProductListComponent,
    FormsModule,
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ekart';
}
