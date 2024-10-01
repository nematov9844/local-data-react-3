import React from 'react'
import style from './style.module.scss'
export default function Card({data}) {
    console.log(data);
  return (
    <div className={style.cards}>
      {
        data.map((item)=>{
            return(
                <div key={item.id} className={style.card}>
                    <img src={item.img} alt="" className={style.card_img} />
                    <div className={style.card_body}>
                        <div className={style.card_header}>
                            <h1 className={style.card_title}>{item.title}</h1>
                            <h4 className={style.card_rate}>{item.rate}</h4>
                        </div>
                        <p className={style.card_desc}>{item.desc}</p>
                        <p className={style.card_date}>{item.date}</p>
                        <h1 className={style.card_price}>${item.price} Night</h1>
                    </div>
                </div>
            )
        })
      }
    </div>
  )
}
