import React ,{useContext}from "react";

import { Link, useHistory } from "react-router-dom";
import Payment from "../components/Payment";
import { useFormik } from "formik"; 
import axios from "axios";
import "./styles/Address.css";
import * as Yup from 'yup'
import Appcontext from "../context/Appcontext";

export default function Adress() {

  const history = useHistory();
  const {registerUser} = useContext(Appcontext);
  const formik  =  useFormik ({
    initialValues:{
      name:'',
      department:'cundinamarca',
      locality:'',
      address:'',
      mail:'',
      password:'',
      repeatPassword:'',
      phone:'',
      descriptionHouse:''
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
       department: Yup.string().required(),
        locality: Yup.string().required(),
        address: Yup.string().required(),
        mail: Yup.string().required(),
        password: Yup.string().required(),
        repeatPassword: Yup.string().required(),
        phone: Yup.number().required(),
    }),
    validate:(formData) =>{
      let errores ={}
      // Validacion nombre
    if(!formData.name){
      errores.name = 'por favor ingrese un nombre'
    }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(formData.name)){
      errores.name = 'El nombre solo puede contener letras y espacios'
    }
    // Validacion correo
    if(!formData.mail){
      errores.mail = 'Por favor ingresa un correo electronico'
    } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(formData.mail)){
      errores.mail = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
    }
        // validacion RepetePassword
    if( formData.password !== formData.repeatPassword){
      errores.repeatPassword = 'Las contraseñas No coinciden.'
    }

    // Validacion general
    if( !formData.phone || !formData.department || !formData.locality  || !formData.address ){
      errores.general = 'Por favor llena todos los campos'
    }
      return errores;
    } ,
    onSubmit: async (values)  => {
      // enviar valores a la base de datos
     axios
      .post('https://backendsan.herokuapp.com/api/auth/local/register', {
        username: values.name,
        email: values.mail,
        password: values.password,
        telefono: values.phone,
       direccional: values.address,
       localidad: values.locality,
       descripcionCasa: values.descriptionHouse,
      })
     .then(response => {
       if(response.data.jwt){
          registerUser(response.data);
          history.push("/carrocompras/{}/checkout");
        }else{
          console.log('Something went wrong');
        }
     })
     .catch(error => {
        console.log('An error occurred:', error.response);
     })

  }
  })
    return (
    <div className="hero-shopping-cart">
      <div className="Information">
        <div className="Information-head">
          <div className="secondary-title">Información de contacto:</div>
        </div>
        <div className="Information-form">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-child-div">
              <span></span>
              <label className="andes-form-control andes-form-control-long" >
                <span className="andes-form-control__label" >
                  Nombre y apellido
                </span>
                <div className="andes-form-control__control" >
                  <input className="xd" type="text" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} ></input>
                </div>
                {formik.touched.name && formik.errors.name && <p className="errors-form">{formik.errors.name}</p>}
                <p className="andes-form-coactiventrol_bottom">Tal cual figure en el documento.</p>
              </label>

              <span></span>
              <div className="container-andes-form-control">
                <label className="andes-form-control">
                  <span className="andes-form-control__label">
                    Departamento
                  </span>
                  <div className="andes-form-control__control">
                      {/*input not editable for the time being*/}
                    <input className="xd input_departamento" type="text" name="department" onChange={formik.handleChange} onBlur={formik.handleBlur} value={'Cundinamarca'} readOnly="readonly"></input>
                  </div>
                  {formik.touched.department && formik.errors.department && <p className="errors-form">{formik.errors.general}</p>}
                   <p className="andes-form-coactiventrol_bottom">Por el momento solo tenemos servicio en este departamento.</p>
                </label>
                <label className="andes-form-control">
                  <span className="andes-form-control__label">Localidad</span>
                  <div className="andes-form-control__control">
                    <input className="xd" type="text" name="locality"onChange={formik.handleChange}onBlur={formik.handleBlur}></input>
                  </div>
                  {formik.touched.locality && formik.errors.locality && <p className="errors-form">{formik.errors.general}</p>}
                <p className="andes-form-coactiventrol_bottom">solo pedidos dentro de la dirección calle 200 con autopista hasta la 85.</p>
              
                </label>
              </div>
              <label className="andes-form-control">
                <span className="andes-form-control__label">Direccion</span>
                <div className="andes-form-control__control">
                  <input className="xd" type="text" name="address"onChange={formik.handleChange}onBlur={formik.handleBlur}></input>
                </div>
                {formik.touched.address && formik.errors.address && <p className="errors-form">{formik.errors.general}</p>}
              </label>

              <label className="andes-form-control">
                <span className="andes-form-control__label">Correo</span>
                <div className="andes-form-control__control">
                  <input className="xd" type="text" name="mail"onChange={formik.handleChange}onBlur={formik.handleBlur}      placeholder="Correo Electronico"></input>
                </div>
                {formik.touched.mail && formik.errors.mail && <p className="errors-form">{formik.errors.mail}</p>}
              </label>
               <label className="andes-form-control">
                <span className="andes-form-control__label">Contraseña</span>
                <div className="andes-form-control__control">
                  <input className="xd" type="password" name="password" onChange={formik.handleChange}onBlur={formik.handleBlur}></input>
                </div>
                {formik.touched.password && formik.errors.password && <p className="errors-form">{formik.errors.general}</p>}
              </label>
              <label className="andes-form-control">
                <span className="andes-form-control__label">Repetir Contraseña</span>
                <div className="andes-form-control__control">
                  <input className="xd" type="password" name="repeatPassword" onChange={formik.handleChange}onBlur={formik.handleBlur}></input>
                </div>
                {formik.touched.repeatPassword && formik.errors.repeatPassword && <p className="errors-form">{formik.errors.repeatPassword}</p>}
              </label>
              <label className="andes-form-control andes-form-control-long">
                <span className="andes-form-control__label">
                  Teléfono de contacto
                </span>
                <div className="andes-form-control__control">
                  <input
                    className="xd"
                    type="text"
                    name="phone"
                    placeholder="Llamarán a este numero si hay algun problema con el envio. "
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></input>
                </div>
                {formik.touched.phone && formik.errors.phone && <p className="errors-form">{formik.errors.department}</p>}
                
              </label>
              <label className="andes-form-control andes-form-control-to-long">
                <span className="andes-form-control__label" maxLength="128">
                  Referencias adicionales para las entregas en esta dirección
                </span>
                <div className="andes-form-control__control">
                  <input
                    className="xd"
                    type="text"
                    name="descriptionHouse"
                    placeholder="Descripcion de la fachada, puntos de referencia para encontrarla, indicaciones de seguridad, etc."
                    onChange={formik.handleChange}
                  ></input>
                </div>
              </label>
              <div className="container-buttons">
              <Link to="/carrocompras">
            <button className="btn-address"><svg height="16" width="16" id="Modo_de_aislamiento" data-name="Modo de aislamiento" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 307.7 141.29"><path d="M178.81,419.56h1.56q137.34,0,274.67,0c3.11,0,5.61.76,6.9,3.86a6.3,6.3,0,0,1-5.81,8.94c-.58,0-1.16,0-1.74,0H178.7c2.13,2.24,4,4.24,5.92,6.22q15.24,15.87,30.51,31.73c4.9,5.11,9.82,10.2,14.65,15.37a6.21,6.21,0,0,1,0,9c-2.55,2.6-6.55,2.52-9.3-.29-4.42-4.52-8.79-9.09-13.17-13.65l-16-16.71-35.89-37.42c-.16-.17-.3-.35-.59-.7,2.1-2.21,4.19-4.43,6.3-6.62L198,380.91c7.48-7.77,14.92-15.58,22.4-23.35,2.26-2.36,4.67-2.85,7.39-1.61a6.45,6.45,0,0,1,3.81,6.46,7.85,7.85,0,0,1-1.89,3.94c-6.92,7.35-14,14.57-21,21.86q-14.7,15.3-29.38,30.65C179.23,419,179.11,419.18,178.81,419.56Z" transform="translate(-154.79 -355.29)"/></svg>Regresar</button>
              </Link>
              <button type="submit" className="btn-address btn-address-invert">
                enviar
                <svg height="16" width="16" id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 307.7 141.29"><path d="M438.47,432.3h-1.56q-137.34,0-274.67,0c-3.11,0-5.61-.76-6.9-3.85a6.3,6.3,0,0,1,5.81-8.94H438.58c-2.13-2.25-4-4.25-5.92-6.23q-15.24-15.87-30.51-31.73c-4.9-5.1-9.82-10.19-14.65-15.36a6.22,6.22,0,0,1,0-9c2.55-2.59,6.55-2.51,9.3.3,4.42,4.52,8.79,9.09,13.17,13.65q8,8.34,16,16.71,18,18.71,35.89,37.42c.16.16.3.35.59.69-2.1,2.21-4.19,4.43-6.3,6.63q-18.45,19.2-36.91,38.38c-7.48,7.78-14.92,15.58-22.4,23.36-2.26,2.35-4.67,2.85-7.39,1.61a6.45,6.45,0,0,1-3.81-6.46,7.92,7.92,0,0,1,1.89-3.95c6.92-7.34,14-14.57,21-21.85q14.7-15.32,29.38-30.65C438.05,432.86,438.17,432.68,438.47,432.3Z" transform="translate(-154.79 -355.29)"/></svg>
              </button>
              </div>
            </div>
          </form>
        </div>

      </div>
      <Payment />
    </div>
  );
}
