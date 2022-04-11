import * as React from "react";

import {useContext} from "react"
import { useHistory,Link } from "react-router-dom";
import { useFormik } from "formik"; 

import Appcontext from "../context/Appcontext";
import axios from "axios";
import * as Yup from 'yup'

 import "./styles/Address.css";

export default function Addres() {
    const history = useHistory();
    const {registerUser} = useContext(Appcontext);
    const formik  =  useFormik ({
      initialValues:{
        department:'cundinamarca',
        address:'',
        phone:'',
        descriptionHouse:''
      },
      validationSchema: Yup.object({
          address: Yup.string().required(),
          mail: Yup.string().required(),
          phone: Yup.number().required(),
          descriptionHouse: Yup.string()
      }),
      validate:(formData) =>{
        let errores ={}
        if( !formData.phone ){
          errores.phone = '❗️Introduce tu numero de telefono'
        }
        if (!formData.address){
          errores.address = "❗️Introduce tu direccíon"
        }
      return errores
      } ,
      onSubmit: async (values)  => {
        // enviar valores a la base de datos
       axios
      //  enviar direccion 
        .post(process.env.REACT_APP_API_URL_USER_REGISTER, {
          direccion: values.address,
          telefono: values.phone,
          descripcionCasa: values.descriptionHouse,
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
          alert('ha ocurrido un error con el servidor revisar el correo electronico e intente nueva mente ')
       })
  
    }
    })
    return (
        <div className="information-form">
          <form onSubmit={formik.handleSubmit}>
            
            <div className="form-child-div form-child-div-address">
          <h2 className="h2-register">Direccion de envio</h2>

              <div className="container-label-form">
                <label className="andes-form-control" >
                  <p className="andes-form-control__label" >
                  Departamento
                  </p>
                  <div className="andes-form-control__control" >
                    <input className="input-form-login input_departamento " type="text" name="department" onChange={formik.handleChange} onBlur={formik.handleBlur}value={'Cundinamarca'} readOnly="readonly" ></input>
                  </div>
                </label>  
                <div className="p-password">
                <p className="icon-login-info">i</p>
              <p >Por el momento solo tenemos servicio en este departamento.</p>
              </div>
              </div>
              
              <div className="container-label-form">
                <label className="andes-form-control">
                  <p className="andes-form-control__label">Direccíon</p>
                  <div className="andes-form-control__control">
                    {(formik.touched.address && formik.errors.address)?
                    <input className="input-form-login errors-form-control" type="text" name="address"onChange={formik.handleChange}onBlur={formik.handleBlur}></input>
                    :
                    <input className="input-form-login" type="text" name="address"onChange={formik.handleChange}onBlur={formik.handleBlur}></input>
                    }
                  </div>
                  {(formik.touched.address && formik.errors.address) && <p className="errors-form">{formik.errors.address}</p>}
                </label>
                <div className="p-password">
                <p className="icon-login-info">i</p>
              <p >Solo pediddos dentro de calle 200 con autopista hasta la 85.</p>
              </div>
              </div>

              
              <div className="container-label-form">
                <label className="andes-form-control">
                <p className="andes-form-control__label">Telefono de contacto</p>
                <div className="andes-form-control__control">
                {(formik.touched.phone && formik.errors.phone )?
                  <input className="input-form-login errors-form-control" type="tel" name="phone" placeholder="Llamarán a este numero si hay algún problema con en el envio." onChange={formik.handleChange}onBlur={formik.handleBlur} ></input>

                    :
                    <input className="input-form-login" type="tel" name="phone" placeholder="Llamarán a este numero si hay algún problema con en el envio." onChange={formik.handleChange}onBlur={formik.handleBlur}></input>

                    }
                </div>
                {(formik.touched.phone && formik.errors.phone )  && <p className="errors-form">{formik.errors.phone}</p>}
              </label>
    
              </div>
               
              <div className="container-label-form">
                <label className="andes-form-control">
                  <p className="andes-form-control__label">Referencias adicionales para las entregas de direccion</p>
                  <div className="andes-form-control__control">
                  {(formik.touched.descriptionHouse && formik.errors.descriptionHouse)?
                      <input className="input-form-login errors-form-control input-form-login-reference-house" type="text" name="descriptionHouse" placeholder="Descripcion de la fachada, puntos de referencia, indicaciones, etc." onChange={formik.handleChange}onBlur={formik.handleBlur}></input>
                    :
                    <input className="input-form-login input-form-login-reference-house" type="text" name="descriptionHouse" placeholder="Descripcion de la fachada, puntos de referencia, indicaciones, etc." onChange={formik.handleChange}onBlur={formik.handleBlur}></input>
                    }
                  </div>
                  {formik.touched.descriptionHouse && formik.errors.descriptionHouse && <p className="errors-form">{formik.errors.descriptionHouse}</p>}
                </label>
              </div>
              <div className="container-buttons">
              <button type="submit" className="btn-address btn-address-invert">
                Continuar
              </button>
              </div>
            </div>
          </form>
        </div>
  );
}
