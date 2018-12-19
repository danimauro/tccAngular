import { Component } from '@angular/core';
import { DependenciaService } from '../../services/dependencia.service';
import { ActivatedRoute } from '@angular/router';
import { Dependencia } from 'src/app/Interfaces/Dependencia.interface';

@Component({
  selector: 'app-dependencia',
  templateUrl: './dependencia.component.html',
  styleUrls: ['./dependencia.component.css']
})

export class DependenciaComponent  {

  // Variables del componente 
  public eventoDep: Dependencia;
  public cargo : boolean;

  constructor(private _dependenciaService:DependenciaService,
              public _activatedRoute:ActivatedRoute) { 

    //Captura el codigo de la url que corresponde a la organizacion a consultar
    this._activatedRoute.params.subscribe( params => {
        this.getEventosDep(params['cod']);        
    }); 

  }
  //Get eventos relacionados con una dependencia 
  getEventosDep(cod:string){ 
    this._dependenciaService.getDepEventos(cod)
            .subscribe( (resEventosDep:Dependencia) => {

                this.eventoDep = resEventosDep;
                this.cargo = true;

            }, (errorService) => {

                if(errorService.status == 500 || errorService.status == 400){
                    console.log(errorService.error.message);
                }
        
            });
   }


}
