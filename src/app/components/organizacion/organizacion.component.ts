import { Component, OnInit } from '@angular/core';
import { Organizacion } from '../../models/organizacion.models';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-organizacion',
  templateUrl: './organizacion.component.html',
  styleUrls: ['./organizacion.component.css']
})
export class OrganizacionComponent implements OnInit {

  public organizacion: Organizacion;
  public orga: any = {};




  constructor() {


    //objeto organizacion 
    this.orga = {codigo: '001' , nombre: 'Universidad de Manizales' , descripcion: 'http://umanizales.edu.co' ,
                  imagen: 'assets/img/logo_um.png' ,

//Objeto facultada con arreglo de informacion sobre las facultades//
facultad: [{ nombrefa: 'Ciencias e Ingenieria' , imagen: 'assets/img/f2.png', descripcion: 'esta es la facultad de ingenieria de la universidad manizales' }
, {nombrefa: 'Medicina' , imagen: 'assets/img/f2.png', descripcion: 'esta es la facultad de medicina de la universidad manizales esta es la facultad de arquitectura de la universidad manizales' }
, {nombrefa: 'Derecho' , imagen: 'assets/img/f2.png', descripcion: 'esta es la facultad de derecho de la universidad manizalesesta es la facultad de arquitectura de la universidad manizalesesta es la facultad de arquitectura de la universidad manizales'}
, {nombrefa: 'Arquitectura' , imagen: 'assets/img/f2.png', descripcion: 'esta es la facultad de arquitectura de la universidad manizales esta es la facultad de arquitectura de la universidad manizalesesta es la facultad de arquitectura de la universidad manizales'}]};


    this.organizacion = this.orga;
    console.log( this.orga );
  }
  

  ngOnInit() {
  }

}
