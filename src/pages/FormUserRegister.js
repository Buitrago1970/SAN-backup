import * as React from "react";

import {useContext} from "react"
import { useHistory,Link } from "react-router-dom";
import { useFormik } from "formik"; 
import Swal from 'sweetalert2'


import Appcontext from "../context/Appcontext";
import axios from "axios";
import * as Yup from 'yup'

import "./styles/FormUserRegister.css";


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
        name: Yup.string().required(),
        mail: Yup.string().required(),
        password: Yup.string().required(),
        repeatPassword: Yup.string().required(),
    }),
    validate:(formData) =>{
      let errores ={}
      
    if(!formData.name){
      errores.name = '❗️Introduce tu nombre'
    }
    if(!formData.mail){
      errores.mail = '❗️Escriba su correo electrónico'
    } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(formData.mail)){
      errores.mail = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
    }
    if(formData.password.length < 6){
      errores.password = '❗️La contraseña debe contener al menos seis caracteres.'
    }
    if( formData.password !== formData.repeatPassword){
      errores.repeatPassword = '❗️Las contraseñas No coinciden'
    }
   
   
  return errores
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
          history.push("/carrocompras/checkout");
        }else{
          Swal.fire(
            '',
            'hha ocurrido un error revise el correo o contraseña e intenta nueva mente',
            'warning'
          )
        }
     })
     .catch(error => {
      Swal.fire(
        '',
        'ha ocurrido un error revise el correo o contraseña e intenta nueva mente',
        'warning'
      )
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
                    {(formik.touched.name && formik.errors.name) ?  <input className="input-form-login errors-form-control " type="text" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} ></input>:
                    <input className="input-form-login " type="text" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} ></input>
                  }
                  </div>
                  {formik.touched.name && formik.errors.name && <p className="errors-form">{formik.errors.name}</p>}
                </label>  
              </div>
              
              <div className="container-label-form">
                <label className="andes-form-control">
                  <p className="andes-form-control__label">Correo electronico</p>
                  <div className="andes-form-control__control">
                    {(formik.touched.mail && formik.errors.mail)?
                    <input className="input-form-login errors-form-control" type="text" name="mail"onChange={formik.handleChange}onBlur={formik.handleBlur}></input>
                    :
                    <input className="input-form-login" type="text" name="mail"onChange={formik.handleChange}onBlur={formik.handleBlur}></input>
                    }
                  </div>
                  {formik.touched.mail && formik.errors.mail && <p className="errors-form">{formik.errors.mail}</p>}
                </label>
              </div>

              
              <div className="container-label-form">
                <label className="andes-form-control">
                <p className="andes-form-control__label">Contraseña</p>
                <div className="andes-form-control__control">
                {(formik.touched.password && formik.errors.password)?
                  <input className="input-form-login errors-form-control" type="password" name="password" onChange={formik.handleChange}onBlur={formik.handleBlur} placeholder="Como mínimo 6 caracteres"></input>

                    :
                    <input className="input-form-login" type="password" name="password" onChange={formik.handleChange}onBlur={formik.handleBlur} placeholder="Como mínimo 6 caracteres"></input>

                    }
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
                  {(formik.touched.repeatPassword && formik.errors.repeatPassword)?
                      <input className="input-form-login errors-form-control" type="password" name="repeatPassword" onChange={formik.handleChange}onBlur={formik.handleBlur}></input>
                    :
                    <input className="input-form-login" type="password" name="repeatPassword" onChange={formik.handleChange}onBlur={formik.handleBlur}></input>
                    }
                  </div>
                  {formik.touched.repeatPassword && formik.errors.repeatPassword && <p className="errors-form">{formik.errors.repeatPassword}</p>}
                </label>
              </div>
              <div className="container-buttons">
              <button type="submit" className="btn-register btn-address-invert">
                Continuar
              </button>
              </div>
              <div className="container-text-bottom-login">
                <p>Ya tienes cuenta?</p>
                <Link to="/" className="link-login">iniciar sesíon</Link>
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
