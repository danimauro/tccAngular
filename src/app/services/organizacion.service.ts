import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Organizacion } from '../Interfaces/organizacion.interface';
import { environment } from '../../environments/environment.dev';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrganizacionService {

  // Se declaran las variables de tipo interface Organización
  public organizaciones: Organizacion[] = [];
  public organizacion: Organizacion;
  //Url APIRest
  private url:string = environment.apiUrl; 
  

  constructor(private http:HttpClient) { 
    this.getOrganizaciones();
  }  

  // Devuelve un arraglo con las organizaciones activas en el API
  getOrganizaciones(){

    return this.http.get<Organizacion[]>(`${this.url}/organizaciones`).pipe( map( (resOrga:Organizacion[]) => {
      this.organizaciones = resOrga;
      return this.organizaciones;
    }));

  }
}
