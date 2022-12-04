import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
// import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  // const { data, loading, error } = useFetch(
  //   `/products?populate=*&[filters][type][$eq]=${type}`
  // );
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/14579190/pexels-photo-14579190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/6782745/pexels-photo-6782745.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Пепперони Фреш с перцем",
      isNew: true,
      oldPrice: 73,
      price: 83,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/14483655/pexels-photo-14483655.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Пепперони Фреш с перцем",
      isNew: true,
      oldPrice: 73,
      price: 83,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/7296696/pexels-photo-7296696.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Пепперони Фреш с перцем",
      isNew: true,
      oldPrice: 73,
      price: 83,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/12907094/pexels-photo-12907094.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Пепперони Фреш с перцем",
      isNew: true,
      oldPrice: 73,
      price: 83,
    },
  ];

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
