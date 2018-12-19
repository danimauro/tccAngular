import { Evento } from '../Interfaces/Evento.interface';

export interface Dependencia {
    cod:  string;
    nombre: string;
    descrip: string;
    imagen?: string;
    estado?: boolean;
    depEvento?: Evento;
}
