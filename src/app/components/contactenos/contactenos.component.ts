import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RequestInfoService } from '../../services/request-info.service'

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent {

  contactenos: FormGroup;


  //alert
  public alertClosed: boolean = false;
  public type:string;
  public mensaje:string;

  constructor(private _requestInfoService:RequestInfoService) {

    this.contactenos =  new FormGroup({
      'nombre': new FormControl('', [Validators.required,Validators.minLength(3)]),
      'apellido': new FormControl('', [Validators.required,Validators.minLength(3)]),
      'tel': new FormControl('',[Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'mensaje': new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(200)] )
    })

  }

  enviarPregunta(){
    
    this._requestInfoService.getEnviarPregunta(this.contactenos.value).subscribe( (res:any) => {

      this.alertClosed = true;
      this.type = "success";
      this.mensaje = res.message; 
  
    }, (errorService) => {

        if(errorService.status == 500 || errorService.status == 400){
  
            this.alertClosed = true;
            this.type = "danger";
            this.mensaje = errorService.error.message; 
        }
  
    });

  }

}
