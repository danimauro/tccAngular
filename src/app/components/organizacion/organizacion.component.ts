import { Component, OnInit } from '@angular/core';
import { Organizacion } from '../../Interfaces/organizacion.interface';

@Component({
  selector: 'app-organizacion',
  templateUrl: './organizacion.component.html',
  styleUrls: ['./organizacion.component.css']
})

export class OrganizacionComponent implements OnInit {

  public organizacion: Organizacion;

  constructor() {

  }

  ngOnInit() {
  }

}
