import {Dependencia} from "../Interfaces/Dependencia.interface";
export interface Organizacion {
    nombre: string;
    descrip: string;
    imagen: string;
    email?: string;
    tel?: string;
    cod: string;
    estado?: boolean;
    DepOrga?: Dependencia;
}

