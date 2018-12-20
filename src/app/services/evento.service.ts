import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { map } from 'rxjs/operators';
import { Evento } from '../Interfaces/Evento.interface';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

// Se declaran las variables de tipo interface Evento
public evento: Evento[] = [];
public infoEvento: Evento;

//Url APIRest
private url:string = environment.apiUrl; 

constructor(private http:HttpClient) {}

// Get info eventos relacionada con el codigo 
getInfoEvento(cod:string){

  return this.http.get<Evento>(`${ this.url }/evento/${ cod }`)
                  .pipe( map( (resInfoEvento:Evento) => {
                        this.infoEvento = resInfoEvento['eventoDB'][0];
                        return this.infoEvento;
                  }));
}

}