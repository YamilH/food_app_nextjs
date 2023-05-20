import React from 'react'
import classes from "../../styles/Loader.module.css";
import Image from "next/image";

const Loader = () => {
  return (
    <div className={classes.container}>

      <Image src="/img/logo3.png" alt="" width={160} height={69} />
      {/* <h2 className={classes.h2}>Cargando...</h2> */}
      <Image className={classes.pizza} src="/img/ppizza2.png" alt="" width="200" height="200" />
    </div>
  );
};

export default Loader;

