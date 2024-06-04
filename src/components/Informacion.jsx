const Informacion = (props) => {
    return (
        <>
           <h2>Conceptos de react</h2>
           <p>React es una biblioteca de JavaScript de código abierto desarrollada por Facebook para construir interfaces de usuario, especialmente para aplicaciones web de una sola página. Permite a los desarrolladores crear componentes reutilizables que gestionan su propio estado y se combinan para formar interfaces de usuario complejas. React utiliza un enfoque declarativo, lo que facilita predecir cómo se verá la interfaz en cualquier momento, y emplea un Virtual DOM para optimizar las actualizaciones y renderizaciones del DOM real, mejorando así el rendimiento de las aplicaciones.<br/>Comision:{props.comision}</p> 
        </>
    );
};

export default Informacion;