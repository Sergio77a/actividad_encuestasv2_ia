import { useParams, Link } from "react-router-dom";

const Encuesta = ({listaEncuestas}) => {
  const { id } = useParams();

  const encuesta = listaEncuestas.find (encuesta => encuesta.id === parseInt(id));

  return (
    <div>
    <div className="encuesta-item-container">
      <div className="encuesta-item">
        <h2> {encuesta.titulo}</h2>  
        <p> {encuesta.descripcion}</p>
      </div>
      </div>

    <div className= "encuesta-item-container">
      <div className="encuesta-item">
         <h2 > Preguntas</h2>

     <p>
      { !encuesta.preguntas && <p> No hay preguntas</p>}
      {encuesta.preguntas && encuesta.preguntas.map((pregunta) => (
        <div key={pregunta.id}>
          <p>{pregunta.pregunta}</p>
          <ol>
            {pregunta.opciones.map((opcion) => (
              <li key={opcion.id}>{opcion.texto}</li>             
            ))}
             </ol>
            </div>

          
      ))}
     </p>
      </div>

    <br />
    </div>
  <Link to="/">Volver</Link>
    </div>
    );

  
};

export default Encuesta;