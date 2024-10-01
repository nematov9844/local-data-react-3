import React, { useState } from 'react';
import Style from './style.module.scss';
import Navbar from './navbar/navbar';
import search from '../../assets/data/Search.png';
import globe from '../../assets/data/Globe.png';
import bars from '../../assets/data/bars.png';
import Search from './search/search';
import Drawer from './drower/drower'; // Drawer komponentini import qilamiz

export default function Header({ data }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <header className={Style.header}>
        <div className={Style.gray}><img src={data.logo} alt="" />
        <img src={bars} alt="" onClick={toggleDrawer} className={Style.btnFF} />
        
        </div>
        <nav className={Style.nav}>
          <p>Anywhere</p>
          <p>Any week</p>
          <p>Add guests</p>
          <img src={search} alt="" />
        </nav>
        <div className={Style.action}> 
          <p>Airbnb your home</p>
          <img src={globe} alt="" />
          <div className={Style.flex}>
            {/* Drawer-ni ochirish uchun onClick qo'shamiz */}
            <img src={bars} alt="" onClick={toggleDrawer}  />
            <img src={data.sign} alt="" />
          </div>
        </div>
      </header>
      <Navbar data={data.navbar} />
      <Search />

      {/* Drawer komponentini qo'shamiz */}
      <Drawer isOpen={drawerOpen} onClose={toggleDrawer} data={data}/>
    </div>
  );
}
