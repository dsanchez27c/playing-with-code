import React from 'react';
import logo from './../../logo.svg';
import { MenuItemsInterface } from '../../interfaces/views/uiLayout/UILayoutInterface';

const MenuBar = () => {
  const menuItems: MenuItemsInterface[] = [
    {
      title: 'Inicio',
      path: '/'
    },
    {
      title: 'Catalogo',
      path: '/catalogue'
    },
    {
      title: 'Acerca de',
      path: '/about'
    },
    {
      title: 'Comunidad',
      path: '/comunity'
    }
  ];

  return (
    <div className="MenuBarStyle">
      <div className="menu-bar">
        <div className="logoContainer">
          <img src={logo} alt="logo" title="logo" />
        </div>
        <ul className="menu-bar-list-container">
          {menuItems.map((item: MenuItemsInterface, idx: any) => {
            return (
              <li key={idx} className="menu-bar-list">
                <a className="menu-bar-item" href={`${item.path}`}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="menu-bar-user-btn">
          <button>Iniciar Sesión</button>
          <button>Registrarme</button>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
