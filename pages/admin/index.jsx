import { useState } from 'react';
import axios from 'axios';
import Image from 'next/legacy/image';
import classes from '../../styles/Admin.module.css';

const Index = ({ orders, products }) => {

  const [pizzaList, setPizzaList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const status = ["Preparando", "En Camino", "Entregado"];

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products` + id
      );
      setPizzaList(pizzaList.filter((pizza) => pizza._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0];
    const currentStatus = item.status;

    try {
      const res = await axios.put(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/orders` + id, {
        status: currentStatus + 1,
      });
      setOrderList([
        res.data,
        ...orderList.filter((order) => order._id !== id),
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <h1 className={classes.title}>Productos</h1>
        <table className={classes.table}>
          <tbody>
            <tr className={classes.trTitle}>
              <th>Imagen</th>
              <th>Id</th>
              <th>Pizza</th>
              <th>Precio</th>
              <th>Acción</th>
            </tr>
          </tbody>
          {pizzaList.map((product) => (
            <tbody key={product._id}>
              <tr className={classes.trTitle}>
                <td>
                  <Image
                    src={product.img}
                    width={50}
                    height={50}
                    objectFit="cover"
                    alt=""
                  />
                </td>
                <td>{product._id.slice(0, 5)}...</td>
                <td>{product.title}</td>
                <td>${product.prices[0]}</td>
                <td>
                  {/* <button className={classes.button}>Editar</button> */}
                  <button
                    className={classes.button}
                    onClick={() => handleDelete(product._id)}
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className={classes.item}>
        <h1 className={classes.title}>Órdenes</h1>
        <table className={classes.table}>
          <tbody>
            <tr className={classes.trTitle}>
              <th>Id</th>
              <th>Cliente</th>
              <th>Total</th>
              <th>Pago</th>
              <th>Estado</th>
              <th>Acción</th>
            </tr>
          </tbody>
          {orderList.map((order) => (
            <tbody key={order._id}>
              <tr className={classes.trTitle}>
                <td>{order._id.slice(0, 5)}...</td>
                <td>{order.customer}</td>
                <td>${order.total}</td>
                <td>
                  {order.method === 0 ? <span>cash</span> : <span>paid</span>}
                </td>
                <td>{status[order.status]}</td>
                <td>
                  <button onClick={() => handleStatus(order._id)}>
                    Next Stage
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  const productRes = await axios.get(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products`);
  const orderRes = await axios.get(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/orders`);

  return {
    props: {
      orders: orderRes.data,
      products: productRes.data,
    },
  };
};

export default Index;