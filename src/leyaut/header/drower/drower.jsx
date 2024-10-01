import React from 'react';
import search from '../../../assets/data/Search.png';
import globe from '../../../assets/data/Globe.png';
import bars from '../../../assets/data/bars.png';
import Search from '.././search/search';
import Style from './style.module.scss';

const Drawer = ({ isOpen, onClose,data }) => {
  return (
    <div className={`${Style.drawer} ${isOpen ? Style.open : Style.close}`}>
      <button onClick={onClose}>X</button>
      <header className={Style.header}>
        <div><img src={data.logo} alt="" /></div>
        <nav className={Style.nav}>
          <p>Anywhere</p>
          <p>Any week</p>
          <p>Add guests</p>
        </nav>
      </header>
    </div>
  );
};

export default Drawer;
