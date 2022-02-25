import * as React from 'react';
import { useContext } from 'react';
import jwt_decode from 'jwt-decode';

import './styles/PopUpLogin.css';
import {Link} from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { setToken } from '../utils/token';
import axios from 'axios';
import Appcontext from '../context/Appcontext';
import { useHistory } from 'react-router-dom';

export default function PopUpLogin(props) {
  const {loginUser} = useContext(Appcontext);

  const history = useHistory();
  //  useEffect(() => {
  //    const token = getToken();
  //    if (token) {
  //     const decoded = jwt_decode(token);

  //      loginUser(token, decoded);
  //    }else{
  //      loginUser(null, null);
  //    }
  //  },[]);

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
      const url = 'https://backendsan.herokuapp.com/api/auth/local';
      const data = {
        identifier: values.mail,
        password: values.password,
      };
      try {
        const response = await axios.post(url, data);
        const token = response.data.jwt;
        const decoded = jwt_decode(token);
        const userData = response.data.user;
        setToken(token);
        loginUser(userData, decoded);
        props.closePopUp(false);
        history.push("/carrocompras/{}/checkout");
      } catch (error) {
        alert('Usuario o contraseña incorrectos');
      }
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
            {/* <div className='link-reset-password'>
              <a href="#" className='reset-password'>¿Olvidaste tu contraseña?</a>

            </div> */}
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