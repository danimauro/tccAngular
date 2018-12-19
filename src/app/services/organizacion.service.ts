import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Organizacion } from '../Interfaces/organizacion.interface';
import { environment } from '../../environments/environment.prod';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrganizacionService {

  // Se declaran las variables de tipo interface Organización
  public organizaciones: Organizacion[] = [];
  public orgaDep: Organizacion;

  //Url APIRest
  private url:string = environment.apiUrl; 
  

  constructor(private http:HttpClient) { 
    this.getOrganizaciones();
  }  

  // Devuelve un arraglo con las organizaciones activas en el API
  getOrganizaciones(){

    return this.http.get<Organizacion[]>(`${this.url}/organizaciones`)
                    .pipe( map( (resOrga:Organizacion[]) => {
                    this.organizaciones = resOrga['organiDB'];
                    return this.organizaciones;
    }));

  }
  
  // Trae una organizacion con su respectivas dependencias 
  getOrgaDependencias(cod:string){
    
    return this.http.get(`${ this.url }/dependencias/${ cod }`)
                    .pipe( map( (resOrgaDepen:Organizacion) => {
                          this.orgaDep = resOrgaDepen['organiDB'][0];
                          return this.orgaDep;
    }));


  }

}
