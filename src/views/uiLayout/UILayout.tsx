import React from 'react';
import { AddTopBar } from '../../components/layout/advertisement/AddTopBar';
import { UILayoutStyle } from '../../styles/views/uiLayout/UILayoutStyle';
import { Outlet } from 'react-router-dom';
import MenuBar from '../../components/menuBar/MenuBar';

export default function UILayout() {
  return (
    <div className={UILayoutStyle}>
      <AddTopBar />
      <MenuBar />

      <div className="detail-container">
        <Outlet />
      </div>
    </div>
  );
}
