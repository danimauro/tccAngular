import { Component} from '@angular/core';
import { EventoService } from '../../services/evento.service';
import { RequestInfoService } from '../../services/request-info.service';
import { ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/Interfaces/Evento.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent {

  // Variables del componente 
  public infoEvento: Evento;
  public cargo : boolean;
 
  // Formulario de solicutud de información
  requestInfo: FormGroup;

  //alert
  public alertClosed: boolean = false;
  public type:string;
  public mensaje:string;


  constructor(private _eventoService:EventoService,
              private _requestInfoService:RequestInfoService,
              public _activatedRoute:ActivatedRoute) { 

    //Captura el codigo de la url que corresponde a el evento a consultar
    this._activatedRoute.params.subscribe( params => {
        this.getInfoEvento(params['cod']);        
    }); 

    this.requestInfo =  new FormGroup({
        'cod': new FormControl({ disabled:true }),
        'nombre': new FormControl('', [Validators.required, Validators.maxLength(50)]),
        'apellido': new FormControl('',[Validators.required, Validators.maxLength(50)]),
        'email': new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(50), Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
        'tel': new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)] ),
        'mensaje': new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(200)] ),
        'nomEvento': new FormControl({ disabled:true }, [Validators.required])
    })
    

  }

  //Get informacion del evento relacionados con un codigo 
  getInfoEvento(cod:string){
        
    this._eventoService.getInfoEvento(cod).subscribe( (resInfoEvento:Evento) => {

                this.infoEvento = resInfoEvento;
                this.cargo = true;

            }, (errorService) => {

                if(errorService.status == 500 || errorService.status == 400){
                    console.log(errorService.error.message);
                }
        
            });
   }

   postRequestInfo(){
    
    this.requestInfo.value.cod = this.infoEvento.cod;
    this.requestInfo.value.nomEvento = this.infoEvento.nombre;

    this._requestInfoService.getRequestInfo(this.requestInfo.value).subscribe( (resInfo:any) =>{
        
        this.alertClosed = true;
        this.type = "success";
        this.mensaje = resInfo.message; 
        
    }, (errorService) => {

        if(errorService.status == 500 || errorService.status == 400){

            this.alertClosed = true;
            this.type = "danger";
            this.mensaje = "Error al enviar el mensaje, intentalo mas tarde"; 
        }

    });


    }
}