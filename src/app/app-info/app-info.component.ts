import { Component, OnInit } from '@angular/core';
import { Info } from './info';
import { InfoServiceService } from './info-service.service';

@Component({
  selector: 'app-app-info',
  templateUrl: './app-info.component.html',
  styleUrls: ['./app-info.component.css']
})
export class AppInfoComponent implements OnInit{
  info:Info = new Info;
  constructor(private infoService:InfoServiceService){}

  ngOnInit(): void{
    this.infoService.getAll().subscribe(
      i => this.info=i
    );
  }
}
