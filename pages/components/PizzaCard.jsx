import { useState, useEffect } from 'react'
import Image from "next/image";
import classes from "../../styles/PizzaCard.module.css";
import Link from 'next/link';

const PizzaCard = ({ pizza }) => {

  return (
    <div className={classes.container}>
      <Link href={`/product/${pizza._id}`} passHref>
      <Image src={pizza.img} alt="" width="200" height="200" />
      </Link>
      <h1 className={classes.title}>{pizza.title}</h1>
      <span className={classes.price}>${pizza.prices[0]}</span>
      <p className={classes.desc}>{pizza.desc}</p>
    </div>
  );
};

export default PizzaCard;
