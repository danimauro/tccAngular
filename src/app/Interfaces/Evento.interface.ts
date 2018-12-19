export interface Evento {
    cod: string;
    nombre:string;
    descrip:string;
    imagen?: string;
    fecinicio: string;
    fecfin?:string;
    contenido?:string;
    costo:string;
    folleto?:string;
    estado?: boolean;
}
