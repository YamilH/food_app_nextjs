import React, { useEffect, useState } from "react";
import classes from "../styles/Cart.module.css";
import Image from "next/legacy/image";
import { useDispatch, useSelector } from "react-redux";
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import axios from "axios";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";
import OrderDetail from "./components/OrdenDetail";

const Cart = () => {
  // const cart = useSelector((state) => state.cart);
  // const [open, setOpen] = useState(false);
  // const [cash, setCash] = useState(false);
  // const amount = cart.total;
  // const currency = "USD";
  // const style = { layout: "vertical" };
  // const dispatch = useDispatch();
  // const router = useRouter();

  // const createOrder = async (data) => {
  //   try {
  //    const res = await axios.post("http://localhost:3000/api/orders", data)
  //     if (res.status === 201) {
  //     dispatch(reset())
  //     router.push(`/orders/${res.data._id}`);
  //    }
  //   }catch(err){
  //     console.error(err);
  //   }
  // }


  // const ButtonWrapper = ({ currency, showSpinner }) => {
  //   // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  //   // This is the main reason to wrap the PayPalButtons in a new component
  //   const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  //   useEffect(() => {
  //     dispatch({
  //       type: "resetOptions",
  //       value: {
  //         ...options,
  //         currency: currency,
  //       },
  //     });
  //   }, [currency, showSpinner]);

  //   return (
  //     <>
  //       {showSpinner && isPending && <div className="spinner" />}
  //       <PayPalButtons
  //         style={style}
  //         disabled={false}
  //         forceReRender={[amount, currency, style]}
  //         fundingSource={undefined}
  //         createOrder={(data, actions) => {
  //           return actions.order
  //             .create({
  //               purchase_units: [
  //                 {
  //                   amount: {
  //                     currency_code: currency,
  //                     value: amount,
  //                   },
  //                 },
  //               ],
  //             })
  //             .then((orderId) => {
  //               // Your code here after create the order
  //               return orderId;
  //             });
  //         }}
  //         onApprove={function (data, actions) {
  //           return actions.order.capture().then(function (details) {
  //             const shipping = details.purchase_units[0].shipping;
  //             createOrder({
  //               customer: shipping.name.full_name,
  //               address: shipping.address.address_line_1,
  //               total: cart.total,
  //               method: 1,
  //             });
  //           });
  //         }}
  //       />
  //     </>
  //   );
  // };

  return (
    <div className={classes.container}>
      {/* <div className={classes.left}>
        <table className={classes.table}>
          <tbody>
          <tr className={classes.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          </tbody>
          <tbody>
          {cart.products.map((product) =>(
          <tr className={classes.tr} key={product._id}>
            <td>
              <div className={classes.imgContainer}>
                <Image
                  src={product.image}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </td>
            <td>
              <span className={classes.name}>{product.title}</span>
            </td>
            <td>
              <span className={classes.extras}>
              {product.extras.map((extra) => (
                      <span key={extra._id}>{extra.text}, </span>
                ))}
              </span>
            </td>
            <td>
              <span className={classes.price}>{product.price}</span>
            </td>
            <td>
              <span className={classes.quantity}>{product.quantity}</span>
            </td>
            <td>
              <span className={classes.total}>${product.price * product.quantity}</span>
            </td>
          </tr>
     ))}
          </tbody>
        </table>
      </div>
      <div className={classes.right}>
        <div className={classes.wrapper}>
          <h2 className={classes.title}>CART TOTAL</h2>
          <div className={classes.totalText}>
            <b className={classes.totalTextTitle}>Subtotal:</b>${cart.total}
          </div>
          <div className={classes.totalText}>
            <b className={classes.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={classes.totalText}>
            <b className={classes.totalTextTitle}>TOTAL:</b>${cart.total}
          </div>
          {open ? (
          
          <div className={classes.paymentMethods}>
            <button 
            className={classes.payButton}
            onClick={()=>setCash(true)}
            >Cash On Delivery</button>

          <PayPalScriptProvider
                options={{
                    "client-id": "AQ2dkwB69J8yfTONUkZPr6J75uThk4RzTj3GEk6mvHn9eLP1-0_5XTFNItenT5nZ7JjPMEt70D6FuEC5",
                    components: "buttons",
                    currency: "USD",
                    "disable-funding": "credit,card,p24",
                }}
            >
				<ButtonWrapper
                    currency={currency}
                    showSpinner={false}
                />
			</PayPalScriptProvider>
              </div>
          ) : (

          <button 
          onClick={()=>setOpen(true)}
          className={classes.button}>CHECKOUT</button>
          )}
        </div>
      </div>
      {cash && <OrderDetail total={cart.total} createOrder={createOrder} />} */}
    </div>
  );
};

export default Cart;