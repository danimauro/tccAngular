import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { map } from 'rxjs/operators';
import { Dependencia } from '../Interfaces/Dependencia.interface';

@Injectable({
  providedIn: 'root'
})
export class DependenciaService {

  // Se declaran las variables de tipo interface Organización
  public dependencias: Dependencia[] = [];
  public depEvento: Dependencia;

  //Url APIRest
  private url:string = environment.apiUrl; 

  constructor(private http:HttpClient) {}
  
  // Get eventos relacionados con una dependencia
  getDepEventos(cod:string){

    return this.http.get<Dependencia>(`${ this.url }/eventos-dep/${ cod }`)
                    .pipe( map( (resDepEvento:Dependencia) => {
                              this.depEvento = resDepEvento['eventosDepDB'][0];
                              return this.depEvento;
                    }));
  }
  
}
