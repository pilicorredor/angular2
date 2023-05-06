import { Component } from '@angular/core';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app_angular2';
  machine_name = location.hostname;
  date = moment().tz('America/Bogota').format('DD/MM/YYYY h:mm:ss a');

  constructor() { }
  
  ngOnInit(): void { }
}
