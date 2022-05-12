import * as React from 'react';
import { useContext } from 'react';


import { setToken } from '../utils/token';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'
import { useFormik } from 'formik';

import axios from 'axios';
import * as Yup from 'yup';
import Appcontext from '../context/Appcontext';

import './styles/PopUpLogin.css';

export default function PopUpLogin(props) {
  const {loginUser} = useContext(Appcontext);

  const history = useHistory();

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
    onSubmit: async  (values) => {
      // console.log(process.env.REACT_APP_API_URL_USER_LOGIN);
      const url = process.env.REACT_APP_API_URL_USER_LOGIN;
      const data = {
        identifier: values.mail,
        password: values.password,
      };
      try {
        const response = await axios.post(url, data);
        const token = response.data.jwt;
        const userData = response.data.user;
        setToken(token);
        loginUser(userData);
        props.closePopUp(false);
        if(props.loginEnHeader){
          history.push('/')
        }else{
        history.push("/carrocompras/checkout");
        }
      } catch (error) {
        Swal.fire(
          '',
          'Correo o contraseña incorrectos',
          'error'
        )
      }
    }
  });
  return (props.trigger)?(

    <div className="popup-login">
      <div className="popup-login-content">
        <div className='close-popup'>
        <button className="close-popup-login" onClick={()=> props.closePopUp(false)}>x</button>
        </div>
        <h3 className='title-popUp'>Inicia sesión</h3>
        <hr />
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label className='label-login' htmlFor="exampleInputEmail1">Correo electrónico</label>
            <input
              type="text"
              className="input-form-login"
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
              className="input-form-login"
             name="password"
              placeholder="Ingresa tu contraseña"
              onChange={formik.handleChange}
              error={formik.errors.password}
            />
            {formik.touched.password && formik.errors.password && <p className="errors-form">{formik.errors.password}</p>}
          </div>
           <div className="form-group">
            <button type="submit" className=" btn-login" data-swal-toast-template='#my-template'>Inicia sesión</button>
            {/* <div className='link-reset-password'>
              <a href="#" className='reset-password'>¿Olvidaste tu contraseña?</a>

            </div> */}
            </div>
          </form>
         
            <hr />
            <div className="form-group">
              <Link to='/carrocompras/direccion' className='link-signup'>
            <button className="btn-new-acount" onClick={()=>props.closePopUp(false)}>Crear cuenta nueva</button>
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