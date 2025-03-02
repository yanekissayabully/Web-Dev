import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavigatorComponent} from './Components/navigator/navigator.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'album';
}
