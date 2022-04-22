import * as React from "react";

import {useContext} from "react"
import { useHistory } from "react-router-dom";
import { useFormik } from "formik"; 

import Appcontext from "../context/Appcontext";
import * as Yup from 'yup'
import "./styles/FormAddress.css";

export default function Addres({handleSendDateAndSendAddress}) {
    const history = useHistory();
    const {registerUser} = useContext(Appcontext);
    const formik  =  useFormik ({
      initialValues:{
        department:'cundinamarca',
        address:'',
        phone:'',
        descriptionHouse:'',
      },
      validationSchema: Yup.object({
          address: Yup.string().required(),
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
      onSubmit:  async (values)  => {
       await handleSendDateAndSendAddress(values)
      }
    })
    return (
        <div className="container-address">
          <h2 className="h2-address">Direccion de envio</h2>

          <form onSubmit={formik.handleSubmit} id='my-form'>
            <div className="form-child-div-address">

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
              <div className="container-buttons-address">
              </div>
            </div>
          </form>
        </div>
  );
}
