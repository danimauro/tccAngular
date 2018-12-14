import { Component, OnInit } from '@angular/core';
import { Organizacion } from '../../models/organizacion.models';

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
