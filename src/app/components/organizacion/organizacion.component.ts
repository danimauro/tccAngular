import { Component } from '@angular/core';
import { OrganizacionService } from '../../services/organizacion.service';
import { Organizacion } from '../../Interfaces/organizacion.interface'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organizacion',
  templateUrl: './organizacion.component.html',
  styleUrls: ['./organizacion.component.css']
})

export class OrganizacionComponent {
  
  // Variables del componente
  public orgaDep:Organizacion;
  public cargo:boolean;

  constructor(private _organizacionService:OrganizacionService,
              public _activatedRoute:ActivatedRoute) {
      
        //Captura el codigo de la url que corresponde a la organizacion a consultar
        this._activatedRoute.params.subscribe( params => {
            this.getOrgaDependencias(params['cod']);        
        });           

  }

  // Funcion para traer la informacion solicitada de la organizacion respecto a las dependencias
  getOrgaDependencias(cod: string){

    this._organizacionService.getOrgaDependencias(cod)
            .subscribe( (resOrgaDepen:Organizacion) => {

                this.orgaDep = resOrgaDepen;
                this.cargo = true;

            }, (errorService) => {

                if(errorService.status == 500 || errorService.status == 400){
                    console.log(errorService.error.message);
                }
        
            });
            
  }

}
