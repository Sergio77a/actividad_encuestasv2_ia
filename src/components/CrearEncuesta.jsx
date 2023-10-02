import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


const CrearEncuesta=() => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/');
  };

  return (
    <div>
      <h1> Crear Encuesta</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Titulo: </label>
        <input type='text' id='titulo' name = 'titulo'
         {...register("titulo", { required: true , 
        maxLength:{value:50, message:"El titulo es demasiado largo"}})} />

        {errors.titulo && <p>El titulo es requerido</p>}

        <label>Descripcion: </label>
        <textarea type='text' id='descripcion' name = 'descripcion'
        {...register("descripcion", { required: true ,maxLength:{value:250, message:"La descripción es demasiada"}})} />

          {errors.descripcion && <p>La descripción es demasiada</p>}

        <button type='submit'>Crear Encuesta</button> 
      </form>
      </div>


  );

}

export default CrearEncuesta;