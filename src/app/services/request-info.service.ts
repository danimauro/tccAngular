import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { RequestInfo } from '../Interfaces/requestInfo.interface';


@Injectable({
  providedIn: 'root'
})
export class RequestInfoService {

  //Url APIRest
  private url:string = environment.apiUrl; 

  constructor(public http:HttpClient,
              public route:ActivatedRoute) { 

  }

  getRequestInfo(requestInfo: RequestInfo){

    let data = new FormData();
    
    data.append('nombre', requestInfo.nombre);
    data.append('apellido', requestInfo.apellido);
    data.append('tel', requestInfo.tel);
    data.append('email', requestInfo.email);
    data.append('mensaje', requestInfo.mensaje);
    data.append('nomEvento', requestInfo.nomEvento);
    
    return this.http.post(`${this.url}/request-info/${ requestInfo.cod }`, data )
                    .pipe( map( (res:any) => {
                        return res;
                    }));
  }
}
