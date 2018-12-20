import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent {

  contactenos: FormGroup;

  constructor() {

    this.contactenos =  new FormGroup({
      'nombrecompleto': new FormControl('', [Validators.required,
                                            Validators.minLength(8)]),
      'telefono':       new FormControl(''),
      'correo':         new FormControl('', [Validators.required, 
                                            Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'pregunta':       new FormControl('', Validators.required )
    })

  }

}
