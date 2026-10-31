import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders , setAllOrders] = useState([]);

  useEffect (() => {
    axios.get("https://zerodha-r0p1.onrender.com/newOrder").then ((res) => {
      console.log(res.data);
      setAllOrders(res.data);
    })
  },[])



  return (
    <div className="orders">
      {allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div className="order-list">
          <h3>Your Orders</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order, index) => (
                <tr key={index}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{order.price}</td>
                  <td>{order.mode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  
  //   <div className="orders">
  //     <div className="no-orders">
  //       <p>You haven't placed any orders today</p>

  //       <Link to={"/"} className="btn">
  //         Get started
  //       </Link>
  //     </div>
  //   </div>
  );
};

export default Orders;
