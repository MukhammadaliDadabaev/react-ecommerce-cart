import React from "react";
import Card from "../Card/Card";
import "./List.scss";

const List = () => {
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
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
