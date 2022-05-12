import * as React from 'react';

import { useContext, useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';


import "./styles/UserProfile.css"
import Appcontext from '../context/Appcontext';

export default function UserProfile() {
  const history = useHistory();
  const [orders, setOrder] = useState('')
  const { getOrders, logoutUser } = useContext(Appcontext);

  useEffect(() => {
    async function fetchData() {
      const data = await getOrders()
      if (data) {
        setOrder(data)
      } else {
      }
      console.log(orders);
    }
    fetchData();
  }, []);
  const handleLogout = () => {
    logoutUser();
    history.push('/');
  }
  if (orders.length >= 1) {
    return (<>
      <div>
        <div className="orders">
          <h1 className="orders-title">Ordenes</h1>
          <p className='orders-secondary-title'>MIS PEDIDOS</p>
          <div className='container-order'>
            {orders.map((order) => (
              <div className='item-order' key={order.id}>
                <div className='container-p-date-order'>
                  <p className='p-date-item-order'>{order.attributes.fecha_de_creacion}</p>
                </div>
                {/* {order.attributes.product.map((product)=>())} */}
                <div className='info-order'>
                  <div className='img-container-shopping-car'>
                    <img src='https://san-ecommerce.s3.amazonaws.com/small_image_not_found_scaled_1150x647_8fc97ab876.png' alt=''></img>
                  </div>
                  <div className='text-info-order'>
                    <p className={`status-order`}>Estado del pedido: {order.attributes.status === 'pending' ?
                      'Pendiente' : 'Entregado'}</p>
                    <p className='delivery-order-date'>llega el {order.attributes.fecha_de_envio}</p>
                    <p className='total-order'>Total del pedido: ${order.attributes.total}</p>
                    <p className='products-order'>{order.attributes.products.map((product) => (
                      `| ${product.Slug}  `
                    ))}</p>
                  </div>
                  <div className='secondary-info-order'>
                    <p>Numero del pedido: {order.attributes.numero_de_pedido}</p>
                  </div>
                </div>


              </div>
            ))}
          </div>
        </div>
        <button className='btn-close-session' onClick={() => { handleLogout() }}>
          Cerrar Sesion
        </button>
      </div>
    </>);
  } else {
    return (
      <div className="empty-cart-button">
        <h3>Parece que no has realizado ningún pedido durante los últimos 3 meses.</h3>{" "}
        <Link className="link-home" to="/">
          Ir al Home
        </Link>
      </div>
    )
  }

}
