import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor(private http:HttpClient) { }


  public getPrueba(){

    return this.http.get('/articles?include=author').pipe( map( (res:any) => {
      return res;
    }));


  }

}
