import * as React from "react";

import {useContext, useState} from "react"
import { useHistory,Link } from "react-router-dom";
import { useFormik } from "formik"; 

import Appcontext from "../context/Appcontext";
import axios from "axios";
import * as Yup from 'yup'

import "./styles/Address.css";


export default function Adress() {
  const history = useHistory();
  const {registerUser} = useContext(Appcontext);
  const formik  =  useFormik ({
    initialValues:{
      name:'',
      mail:'',
      password:'',
      repeatPassword:'',
    },
    validationSchema: Yup.object({
        name: Yup.string(),
        mail: Yup.string(),
        password: Yup.string(),
        repeatPassword: Yup.string(),
    }),
    validate:(formData) =>{
      let errores ={}
      
    if(!formData.name){
      errores.name = 'por favor ingrese un nombre'
    }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(formData.name)){
      errores.name = 'El nombre solo puede contener letras y espacios'
    }
  
    if(!formData.mail){
      errores.mail = 'Por favor ingresa un correo electronico'
    } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(formData.mail)){
      errores.mail = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
    }
   
    if( formData.password !== formData.repeatPassword){
      errores.repeatPassword = 'Las contraseñas No coinciden.'
    }
    if(formData.password.length < 6){
      errores.password = 'La contraseña debe tener 6 caracteres'
    }
    if ( formData.password.match(/[A-Z]/) ) {
      errores.password = 'La contraseña debe tener 1 letra mayuscula'
  }
    } ,
    onSubmit: async (values)  => {
      // enviar valores a la base de datos
     axios
      .post(process.env.REACT_APP_API_URL_USER_REGISTER, {
        username: values.name,
        email: values.mail,
        password: values.password,
      })
     .then(response => {
       if(response.data.jwt){
          registerUser(response.data);
          history.push("/carrocompras/{}/checkout");
        }else{
          alert('ha ocurrido un error intenta nueva mente')
        }
     })
     .catch(error => {
        alert('ha ocurrido un error con el servidor porfavor intente nueva mente' , error)
     })

  }
  })
    return (
        <div className="information-form">
          <form onSubmit={formik.handleSubmit}>
            
            <div className="form-child-div">
          <h2 className="h2-register">Crea una cuenta</h2>

              <div className="container-label-form">
                <label className="andes-form-control" >
                  <p className="andes-form-control__label" >
                  Tu nombre
                  </p>
                  <div className="andes-form-control__control" >
                    <input className="input-form-login" type="text" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} ></input>
                  </div>
                  {formik.touched.name && formik.errors.name && <p className="errors-form">{formik.errors.name}</p>}
                </label>  
              </div>
              
              <div className="container-label-form">
                <label className="andes-form-control">
                  <p className="andes-form-control__label">Correo electronico</p>
                  <div className="andes-form-control__control">
                    <input className="input-form-login" type="text" name="mail"onChange={formik.handleChange}onBlur={formik.handleBlur}>

                    </input>
                  </div>
                  {formik.touched.mail && formik.errors.mail && <p className="errors-form">{formik.errors.mail}</p>}
                </label>
              </div>

              
              <div className="container-label-form">
                <label className="andes-form-control">
                <p className="andes-form-control__label">Contraseña</p>
                <div className="andes-form-control__control">
                  <input className="input-form-login" type="password" name="password" onChange={formik.handleChange}onBlur={formik.handleBlur} placeholder="Como mínimo 6 caracteres"></input>
                </div>
                {formik.touched.password && formik.errors.password && <p className="errors-form">{formik.errors.password}</p>}
              </label>
              <div className="p-password">
                <p className="icon-login-info">i</p>
              <p >La contraseña debe contener al menos seis caracteres.</p>
              </div>
              </div>
               
              <div className="container-label-form">
                <label className="andes-form-control">
                  <p className="andes-form-control__label">Vuelve a escribir la contraseña</p>
                  <div className="andes-form-control__control">
                    <input className="input-form-login" type="password" name="repeatPassword" onChange={formik.handleChange}onBlur={formik.handleBlur}></input>
                  </div>
                  {formik.touched.repeatPassword && formik.errors.repeatPassword && <p className="errors-form">{formik.errors.repeatPassword}</p>}
                </label>
              </div>
              


              <div className="container-buttons">
              <button type="submit" className="btn-address btn-address-invert">
                Continuar
              </button>
              </div>
              <div className="container-text-bottom-login">
                <p>Ya tienes cuenta?</p>
                <Link to="/" className="link-login">iniciar secíon</Link>
              </div>
              {/* <div className="container-text-bottom-login">
              <p>Compras para trabajo?</p>

              <Link to="/" className="link-login">Crea un cuenta corporativa gratis</Link>
              </div> */}
            </div>
          </form>
        </div>
  );
}
