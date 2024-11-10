import {Component} from '@angular/core';
import {TopHeaderComponent} from "../top-header/top-header.component";
import {TopMenuComponent} from "./top-menu/top-menu.component";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [
      TopMenuComponent,
    TopHeaderComponent
  ],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
}
