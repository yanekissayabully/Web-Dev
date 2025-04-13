import { Component } from '@angular/core';
import {CompanyListComponent} from './components/company-list/company-list.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    CompanyListComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hh-front';
}
