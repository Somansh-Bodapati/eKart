import {Component} from '@angular/core';
import {TopMenuComponent} from "./top-menu/top-menu.component";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [TopMenuComponent],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
}
