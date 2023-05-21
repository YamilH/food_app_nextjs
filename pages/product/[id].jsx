import { useState } from 'react';
import Image from "next/legacy/image";
import classes from '../../styles/Product.module.css'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addProduct } from '@/redux/cartSlice';

const Product = ({ pizza }) => {
  const [price, setPrice] = useState(pizza.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();


  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };

  const handleClick = () => {
    dispatch(addProduct({...pizza, extras, price, quantity}));
  };
 
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.imgContainer}>
          <Image src={pizza.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={classes.right}>
        <h1 className={classes.title}>{pizza.title}</h1>
        <span className={classes.price}>${price}</span>
        <p className={classes.desc}>{pizza.desc}</p>
        <h3 className={classes.choose}>Elegir Tamaño</h3>
        <div className={classes.sizes}>
          <div className={classes.size} onClick={() => handleSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={classes.number}>Chica</span>
          </div>
          <div className={classes.size} onClick={() => handleSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={classes.number}>Mediana</span>
          </div>
          <div className={classes.size} onClick={() => handleSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={classes.number}>Grande</span>
          </div>
        </div>
        <h3 className={classes.choose}>Agregar más ingredientes</h3>
        <div className={classes.ingredients}>
          {pizza.extraOptions.map((option) => (
            <div className={classes.option} key={option._id}>
              <input
                type="checkbox"
                id={option.text}
                name={option.text}
                className={classes.checkbox}
                onChange={(e) => handleChange(e, option)}
              />
          <label htmlFor="double">{option.text}</label>
        </div>
          ))}

        </div>
        <div className={classes.add}>
            <input 
            onChange={(e) => setQuantity(e.target.value)} 
            type="number" 
            defaultValue={1} 
            className={classes.quantity}/>
            <button 
            className={classes.button}
            onClick={handleClick}
            > Añadir al Carrito </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `https://lodemaxi.vercel.app/api/products/${params.id}`
  );

  return {
    props: {
      pizza: res.data,
    },
  };
};


export default Product;