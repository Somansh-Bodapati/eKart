import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {TopHeaderComponent} from './top-header/top-header.component';
import {TopMenuComponent} from './header/top-menu/top-menu.component';

// @ts-ignore
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    TopHeaderComponent,
    HeaderComponent,
    TopMenuComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ekart';
}
