import { useState } from "react";
import classes from "../../styles/Featured.module.css";
import Image from "next/legacy/image";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/featured1.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ];

  const handleArrow = (direction) =>{
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain"/>
      </div>
      <div className={classes.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className={classes.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div className={classes.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <Image src="/img/arrowr.png" layout="fill" alt="" objectFit="contain"/>
      </div>
    </div>
  );
};

export default Featured;