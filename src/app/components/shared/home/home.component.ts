import { Component, OnInit } from '@angular/core';
import { OrganizacionService } from '../../../services/organizacion.service';
import { Organizacion } from '../../../Interfaces/organizacion.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public organizaciones:Organizacion[] = [];

  constructor(private _homeService:OrganizacionService) { }

  ngOnInit() {

    /*this._homeService.getOrganizaciones().subscribe( (organizaciones:Organizacion[]) => {
      console.log(organizaciones);
    }, (error) => {
      console.log(error);
    });*/

  }

}
