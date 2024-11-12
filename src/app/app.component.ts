import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {TopMenuComponent} from './top-menu/top-menu.component';
import {ContainerComponent} from './container/container.component';
import {FormsModule} from '@angular/forms';

// @ts-ignore
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    TopMenuComponent,
    ContainerComponent,
    FormsModule,
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ekart';
}
