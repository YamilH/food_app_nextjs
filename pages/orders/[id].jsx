import React from 'react'
import classes from "../../styles/Order.module.css";
import Image from "next/image";
import axios from "axios";

const Order = ({ order }) => {
  const status = order.status;

  const statusClass = (index) => {
    if (index - status < 1) return classes.done;
    if (index - status === 1) return classes.inProgress;
    if (index - status > 1) return classes.undone;
  };
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.row}>
          <table className={classes.table}>
            <tr className={classes.trTitle}>
              <th>Orden ID</th>
              <th>Cliente</th>
              <th>Dirección</th>
              <th>Total</th>
            </tr>
            <tr className={classes.tr}>
              <td>
                <span className={classes.id}>{order._id}</span>
              </td>
              <td>
                <span className={classes.name}>{order.customer}</span>
              </td>
              <td>
                <span className={classes.address}>{order.address}</span>
              </td>
              <td>
                <span className={classes.total}>{order.total}</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={classes.row}>
          <div className={statusClass(0)}>
            <Image src="/img/paid.png" width={30} height={30} alt="" />
            <span>Pago</span>
            <div className={classes.checkedIcon}>
              <Image
                className={classes.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/img/bake.png" width={30} height={30} alt="" />
            <span>Preparando</span>
            <div className={classes.checkedIcon}>
              <Image
                className={classes.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/img/bike.png" width={30} height={30} alt="" />
            <span>En camino</span>
            <div className={classes.checkedIcon}>
              <Image
                className={classes.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/img/delivered.png" width={30} height={30} alt="" />
            <span>Entregado</span>
            <div className={classes.checkedIcon}>
              <Image
                className={classes.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.wrapper}>
          <h2 className={classes.title}>TOTAL DEL PEDIDO</h2>
          <div className={classes.totalText}>
            <b className={classes.totalTextTitle}>Subtotal:</b>${order.total}
          </div>
          <div className={classes.totalText}>
            <b className={classes.totalTextTitle}>Descuento:</b>$0.00
          </div>
          <div className={classes.totalText}>
            <b className={classes.totalTextTitle}>Total:</b>${order.total}
          </div>
          <button disabled className={classes.button}>
            PAGADO
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`${process.env.DEPLOY_URL}/api/orders/${params.id}`);
  return {
    props: { order: res.data },
  };
};

export default Order;