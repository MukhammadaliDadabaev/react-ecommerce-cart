import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/14579190/pexels-photo-14579190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/6782745/pexels-photo-6782745.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Пепперони Фреш с перцем",
      desc: "Пепперони Фреш с перцем",
      isNew: true,
      oldPrice: 73,
      price: 83,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/14483655/pexels-photo-14483655.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Пепперони Фреш с перцем",
      desc: "Пепперони Фреш с перцем",
      isNew: true,
      oldPrice: 73,
      price: 83,
    },
  ];

  return (
    <div className="cart">
      <h1>Product in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$1982</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
