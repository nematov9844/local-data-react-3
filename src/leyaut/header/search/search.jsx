import React, { useState } from 'react'
import style from './style.module.scss'
export default function Search() {
  const [add , setAdd] = useState(false)
  return (
    <div className={style.all}>
   <div className={style.box}>
   <h1>Display total price</h1>
      <p>Includes all fees, before taxes</p>
      <button onClick={()=>setAdd(!add)} className={ add ? style.btn : style.btns}></button>
   
   </div>
    </div>
  )
}
