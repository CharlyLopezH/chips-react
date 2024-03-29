import { ReactElement } from "react";
import Cargando from "./Cargando";

export const ListadoGenerico=(props: listadoGenericoProps)=>{

    console.log('******Entrando a Listado Genérico...',props.listado);

    if (!props.listado){
        if (props.cargandoUI) {
            return props.cargandoUI;
        }
        return<Cargando/>

    } else if (props.listado.length===0) {

        if (props.listadoVacioUI) {
         return props.listadoVacioUI;    
        }
        return <>No hay elementos para mostrar...</> 
    } else {        
        return props.children;
    }
}

interface listadoGenericoProps{
    listado: any;
    children: ReactElement;
    cargandoUI?: ReactElement;
    listadoVacioUI?: ReactElement;
}

export default ListadoGenerico;