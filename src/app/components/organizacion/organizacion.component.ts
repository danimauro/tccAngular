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

    this.orga = { nombre: 'Universidad de manizales', descrip: 'una descripción',
                  imagen: 'assets/img/logo_um.png', facultad: [{nombrefa : 'ciencias e ingenieria', codigo: '01'}, {
                  nombrefa: 'derecho', codigo: '02'},{ nombrefa: 'medicina', codigo: '03'}] };


    this.organizacion = this.orga;
    console.log( this.orga );
  }

  ngOnInit() {
  }

}
