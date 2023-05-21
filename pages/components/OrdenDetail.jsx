import { useState } from "react";
import classes from "../../styles/OrderDetail.module.css";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Vas a pagar $12 en el Delivery.</h1>
        <div className={classes.item}>
          <label className={classes.label}>Nombre y Apellido</label>
          <input
            placeholder="Tu nombre"
            type="text"
            className={classes.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={classes.item}>
          <label className={classes.label}>Número de Telefono/Celular</label>
          <input
            type="text"
            placeholder="341 3456789"
            className={classes.input}
          />
        </div>
        <div className={classes.item}>
          <label className={classes.label}>Dirección</label>
          <textarea
            rows={5}
            placeholder="Calle, Número, Piso, Departamento, ¿Hay Timbre?"
            className={classes.textarea}
            onChange={(e) => setAddress(e.target.value)}
/>
        </div>
        <button className={classes.button} onClick={handleClick}>
          Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;