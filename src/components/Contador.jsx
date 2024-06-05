import { useState } from "react";

const Contador = () => {
    //Aqui agrego la logica del componente
   // let numero = 10;
//Aqui creo el state
 const [numero, setNumero] = useState(10);
 //   const sumar = ()=>{
     // numero = numero +1;
 //    setNumero(numero + 1)  
 //   }

    return (
        // Aqui puede agregar un poco de logica
        <section className="text-center">
            {/*Aqui va la zona del maquetado */}
            <h2>Contador</h2>
            <p>{numero}</p>
            <button className="btn btn-primary me-2" onClick={()=> setNumero(numero + 1)}>+1</button>
            {/*Agregar*/}
            <button className="btn btn-danger" onClick={()=> setNumero(numero - 1)}>-1</button>
        </section>
    );
};

export default Contador;