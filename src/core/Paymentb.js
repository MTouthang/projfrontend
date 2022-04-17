import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loadCart, cartEmpty } from "./helper/cardHelper";
import { getmeToken, processPayment } from "./helper/paymentBHelper";
import createOrder from "./helper/orderHelper";
import { isAutheticated } from "../auth/helper";
import DropIn from "braintree-web-drop-in-react";

const Paymentb = (prodcuts, setReload = (f) => f, reload = undefined) => {
  const [info, setInfo] = useState({
    loading: false,
    success: false,
    clientToken: null,
    error: "",
  });

  const userId = isAutheticated() && isAutheticated().user._id;
  console.log("USERID:", userId);

  const token = isAutheticated() && isAutheticated().token;
  console.log("USERTOKEN:", token);

  const getToken = (userId, token) => {
    getmeToken(userId, token).then((info) => {
      console.log("INFORMATION: ", info);
      if (info.error) {
        console.log("ERROR LOG: ", info.error);
        setInfo({ ...info, error: info.error });
      } else {
        const clientToken = info.clientToken;
        setInfo({ clientToken });
      }
    });
  };

  useEffect(() => {
    getToken((userId, token));
  }, []);

  return (
    <div>
      <h3> Test brain tree</h3>
    </div>
  );
};

export default Paymentb;
