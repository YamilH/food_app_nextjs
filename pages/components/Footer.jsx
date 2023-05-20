import React from 'react'
import Image from "next/legacy/image";
import classes from '../../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={classes.container} id='idfooter'>
    <div className={classes.itemimagen}>
    <Image src="/img/bg.png" alt="" layout="fill" objectFit="cover" />
    </div>
    <div className={classes.item0}>
    <div className={classes.item}>
      <div className={classes.card}>
        <h2 className={classes.motto}>
          OH SI, ES EL MAXI. DE LO DE MAXI, LA PIZZA BIEN HECHA.
        </h2>
      </div>
      <div className={classes.card}>
        <h1 className={classes.title}>PROXIMAMENTE ENCONTRÁ NUESTRO LOCAL</h1>
        <p className={classes.text}>
           Noruega 3396.
          <br /> Rosario, Santa Fe
          <br /> (0341) 467-1010
        </p>
      </div>
      <div className={classes.card}>
        <h1 className={classes.title}>HORARIOS</h1>
        <p className={classes.text}>
          LUNES A VIERNES
          <br /> 9:00 – 22:00
        </p>
        <p className={classes.text}>
          SÁBADOS Y DOMINGOS
          <br /> 12:00 – 23:30
        </p>

      </div>

      </div>
      <div>
      <p className={classes.textdev}>
          powered by
          <a className={classes.textdev2} href="https://ar.linkedin.com/in/yamilhamui" target="_blank">YamilH</a>
        </p>
        </div>
    </div>
    </div>
  )
}

export default Footer
