import React from 'react'
import Image, { ImageProps } from "next/image";
import classes from '../../styles/Navbar.module.css'
import { useSelector } from "react-redux";
import { RootState } from '@/redux/store';
import  Link  from "next/link";


const Navbar = () => {

  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <div className={classes.callButton}>
          <Image src="/img/telephone.png" alt="" width={32} height={32} />
        </div>
        <div className={classes.texts}>
          <div className={classes.text}>¡HACE TU PEDIDO AHORA!</div>
          <div className={classes.text}>(0341) 467-1010</div>
        </div>
      </div>
      <div className={classes.item}>
        <ul className={classes.list}>
        <Link href='/' passHref className={`${classes.link} ${classes.linkres}`}><li className={classes.listItem}>Home</li></Link>
        <Link href='/#idmenu' passHref className={`${classes.link} ${classes.linkres}`}><li className={classes.listItem}>Menu</li></Link>
        <Link href='/#idmenu' passHref className={`${classes.link} ${classes.linkdes}`}><Image src="/img/size2.png" alt="" width={40} height={40} /></Link>
        <Link href='/' passHref><Image src="/img/logo3.png" alt="" width={160} height={69} /></Link>
        <Link href='/admin/login' passHref className={`${classes.link} ${classes.linkres}`}><li className={classes.listItem}>Login</li></Link>
        <Link href='/#idfooter' passHref className={`${classes.link} ${classes.linkres}`}><li className={classes.listItem}>Contacto</li></Link>
        </ul>
      </div>
      <Link href='/cart' passHref>
      <div className={classes.item}>
        <div className={classes.cart}>
          <Image src="/img/cart.png" alt="" width={30} height={30} />
          <div className={classes.counter}>{quantity}</div>
        </div>
      </div>
      </Link>
    </div>
  );
};


export default Navbar