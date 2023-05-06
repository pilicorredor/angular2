import { Component } from '@angular/core';
import { Info } from './info';
import { InfoService2Service } from './info-service2.service';

@Component({
  selector: 'app-app-info2',
  templateUrl: './app-info2.component.html',
  styleUrls: ['./app-info2.component.css']
})
export class AppInfo2Component {
  info:Info = new Info;
  constructor(private infoService2:InfoService2Service){ }

  ngOnInit(): void{
    this.obtenerDatos();
  }

  private obtenerDatos(){
    this.infoService2.get().subscribe(
      i => {this.info=i}
    );
  }

}
