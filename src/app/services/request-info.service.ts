import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RequestInfoService {

  //Url APIRest
  private url:string = environment.apiUrl; 

  constructor(public http:HttpClient
              public route:ActivatedRoute) { 

  }

  getRequestInfo(requestInfo:FormData, nomEvento:string, cod:string){
    return this.http.post(`${url}/request-info/${ cod }`, requestInfo ).pipe( map( (res:any) => {
        return res;
    }));
  }
}
