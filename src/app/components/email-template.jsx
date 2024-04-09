  
  export const EmailTemplate  = ({
    email, nombreCompleto, pais, ciudad, preguntas
  }) => (
    <div>
      <ul>
        <li>Correo: {email}</li>
        <li>Nombre: {nombreCompleto}</li>
        <li>Pais: {pais}</li>
        <li>Ciudad: {ciudad}</li>
        </ul>

        <h3>Pregunta:</h3>
        <p>
          {preguntas}
        </p>
    </div>
  );