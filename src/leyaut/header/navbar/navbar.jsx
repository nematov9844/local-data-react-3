import React from "react";
import style from './style.module.scss'
export default function Navbar({ data }) {
  return (
    <div className={style.navbar}>
      {data.map((item) => {
        return (
          <div key={item.id} className={style.card}>
            <img src={item.img} alt="" />
            <h1>{item.title}</h1>
          </div>
        );
      })}
    </div>
  );
}
