import React,{useState} from "react";
import axios from "axios";

const OrdersHooks = () => {
  const [orders, setOrders] = useState([]);
  const [loading,setLoading] = useState(false)

  const getOrders = async () => {
    try {
      setLoading(true)
      const resp = await axios.get(
        "https://eshop-deve.herokuapp.com/api/v2/orders",
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzM DZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_ TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrq AF fnPldd8QzWvgVQ",
          },
        }
      );
      setOrders(resp?.data?.orders || []);
    } catch (ex) {
        console.error(ex)
    }
    setLoading(false)
  };
  return {
    getOrders,
    orders,loading
  };
};

export default OrdersHooks;
