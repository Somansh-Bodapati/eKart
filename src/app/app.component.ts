import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-ekart';
}
