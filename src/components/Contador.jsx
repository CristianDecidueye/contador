
const Contador = () => {
    //Aqui agrego la logica del componente
    let numero = 10;

    const sumar = ()=>{
      numero +1;
      console.log(numero);  
    }

    return (
        // Aqui puede agregar un poco de logica
        <section className="text-center">
            {/*Aqui va la zona del maquetado */}
            <h2>Contador</h2>
            <p>{numero}</p>
            <button className="btn btn-primary me-2" onClick={sumar}>+1</button>
            <button className="btn btn-danger">-1</button>
        </section>
    );
};

export default Contador;