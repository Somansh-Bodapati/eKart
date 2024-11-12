import {Component} from '@angular/core';
import {TopMenuComponent} from "./top-menu/top-menu.component";
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [TopMenuComponent, NgForOf],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuItems:string[]=['Home', 'About', 'Products', 'Cart', 'Account', 'Services']
}
