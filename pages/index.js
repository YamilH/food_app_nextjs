import { useState } from "react";
import Head from 'next/head';
import Image from 'next/image'
import Featured from './components/Featured.jsx';
import PizzaList from './components/PizzaList.jsx';
import Add from './components/Add.jsx';
import AddButton from './components/AddButton.jsx';
import axios from 'axios';


export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <>
      <Head>
        <title>Food App</title>
        <meta name="description" content="La mejor pizzería del Barrio Echesortu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {<AddButton setClose={setClose} />}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get(`${process.env.DEPLOY_URL}/api/products`);
  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};
