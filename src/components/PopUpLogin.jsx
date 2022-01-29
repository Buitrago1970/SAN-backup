import React from 'react';

import './styles/PopUpLogin.css';
import {Link} from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function PopUpLogin(props) {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validate:(formData) =>{
      let errores ={}
      // Validacion nombre
    if(!formData.mail){
      errores.mail = 'Por favor ingresa un correo electronico'
    } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(formData.mail)){
      errores.mail = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
    }
    // Validacion contraseña
    if(!formData.password){
      errores.password = 'Por favor ingresa una contraseña'
    } 
    return errores
  },
    onSubmit: (values) => {
      debugger
      console.log(values);
    }
  });
  return (props.trigger)?(
    <div className="popup-login">
      <div className="popup-login-content">
        <div className='close-popup'>
        <button className="close-popup-login" onClick={()=>props.closePopUp(false)}>X </button>
        </div>
        <h3>Inicia sesión</h3>
        <hr />
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label className='label-login' htmlFor="exampleInputEmail1">Correo electrónico</label>
            <input
              type="text"
              className="xd input-login"
              name="mail"
              placeholder="Ingresa tu correo"
              onChange={formik.handleChange}
              error={formik.errors.mail}
            
              />
         {formik.touched.mail && formik.errors.mail && <p className="errors-form">{formik.errors.mail}</p>}
          </div>
          <div className="form-group">
            <label className='label-login' htmlFor="exampleInputPassword1">Contraseña</label>
            <input
              type="password"
              className="xd input-login"
             name="password"
              placeholder="Ingresa tu contraseña"
              onChange={formik.handleChange}
              error={formik.errors.password}
            />
            {formik.touched.password && formik.errors.password && <p className="errors-form">{formik.errors.password}</p>}
          </div>
           <div className="form-group">
            <button type="submit" className="btn btn-primary btn-login">Inicia sesión</button>
            <div className='link-reset-password'>
              <a href="#" className='reset-password'>¿Olvidaste tu contraseña?</a>

            </div>
            </div>
          </form>
         
            <hr />
            <div className="form-group">
              <Link to='/carrocompras/{}/direccion' className='link-signup'>
            <button className="btn btn-primary btn-register">Crear cuenta nueva</button>
              </Link>
            </div>
     </div>
     </div>
  ):(null)
}
 const initialValues = () => ({
  mail: '',
  password: '',
});

const validationSchema = () => ({
    mail: Yup.string().required(),
    password: Yup.string().required(),
});