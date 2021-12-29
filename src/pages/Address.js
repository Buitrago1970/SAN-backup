import React from "react";

import "./styles/Address.css";
import { Link } from "react-router-dom";
import Payment from "../components/Payment";
import { useFormik } from "formik";
import * as Yup from 'yup'

export default function Adress() {
  const formik = useFormik({
    initialValues:{
      name:'',
      department:'',
      locality:'',
      neighborhood:"",
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
      neighborhood: Yup.string().required(),
      address: Yup.string().required(),
      mail: Yup.string().required(),
      password: Yup.string().required(),
      repeatPassword: Yup.string().required(),
      phone: Yup.string().required(),
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
    } //validacion RepetePassword
    if( formData.password !== formData.repeatPassword){
      errores.repeatPassword = 'Las contraseñas No coinciden.'
    }
    // Validacion general
    if( !formData.phone || !formData.department || !formData.locality || !formData.neighborhood || !formData.address){
      errores.general = 'Por favor llena todos los campos'
    }
      return errores;
    } ,
    onSubmit: (values) => {
      console.log(values);
      // enviar valores a la base de datos
    //   fetch('http://localhost:3000/api/users',{
    //     method:'POST',
    //     headers:{
    //       'Content-Type':'application/json'
    //     },
    //     body:JSON.stringify(values)
    //   })
    //   .then(res => res.json())
    //   .then(data => console.log(data))
    // }
    // });
    }
    });
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
                    <input className="xd" type="text" name="department" onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                  </div>
                  {formik.touched.department && formik.errors.department && <p className="errors-form">{formik.errors.general}</p>}
                </label>
                <label className="andes-form-control">
                  <span className="andes-form-control__label">Localidad</span>
                  <div className="andes-form-control__control">
                    <input className="xd" type="text" name="locality"onChange={formik.handleChange}onBlur={formik.handleBlur}></input>
                  </div>
                  {formik.touched.locality && formik.errors.locality && <p className="errors-form">{formik.errors.general}</p>}
                </label>
              </div>
              <label className="andes-form-control">
                <span className="andes-form-control__label">Barrio</span>
                <div className="andes-form-control__control">
                  <input className="xd" type="text" name="neighborhood"onChange={formik.handleChange}onBlur={formik.handleBlur}></input>
                </div>
                {formik.touched.neighborhood && formik.errors.neighborhood && <p className="errors-form">{formik.errors.general}</p>}
              </label>
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
                  <input className="xd" type="text" name="mail"onChange={formik.handleChange}onBlur={formik.handleBlur}></input>
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
                    type="number"
                    name="phone"
                    placeholder="Llamarán a este numero si hay algun problema con el envio. "
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></input>
                </div>
                {formik.touched.phone && formik.errors.phone && <p className="errors-form">{formik.errors.department}</p>}
                <p className="andes-form-coactiventrol_bottom"> Llamaran a este numero si hay algun problema en el envio.</p>
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
              <div>

              <button type="submit" className="btn-address">enviar</button>
              <Link to="/carrocompras">
            <button className="btn-address btn-address-back">Regresar</button>
          </Link>
              </div>
           
            </div> 
            
          </form>
        </div>
      
      </div>
      <Payment />
    </div>
  );
}
