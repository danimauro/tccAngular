import { Component, OnInit } from '@angular/core';
import { OrganizacionService } from '../../../services/organizacion.service';
import { Organizacion } from '../../../Interfaces/organizacion.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Variables del componente
  public organizaciones:Organizacion[] = [];
  public cargo: boolean;

  constructor(private _organizacionService:OrganizacionService) { }

  ngOnInit() {
    
    // Get organizaciones activar en el sistemas
    this._organizacionService.getOrganizaciones().subscribe( (resOrganizaciones:Organizacion[]) => {
      this.organizaciones = resOrganizaciones;
      this.cargo = true;
    }, (errorService) => {

      if(errorService.status == 500 || errorService.status == 400){
          console.log(errorService.error.message);
      }

    });

  }

}
