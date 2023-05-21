import React from 'react'
import classes from "../../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard.jsx"

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={classes.container}>
      {/* <h1 className={classes.title} id="idmenu">Menú</h1>
      <p className={classes.desc}>
        ¡Elegí la pizza que quieras, mandala al Carrito y después volvé al Menú para seguir comprando más!
      </p>
      <div className={classes.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza}/>
        ))}
      </div> */}
    </div>
  );
};

export default PizzaList;