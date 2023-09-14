import React from 'react';
import { AddTopBarStyle } from '../../../styles/components/layout/adversisement/AddTopBarStyle';

const AddTopBar = () => {
  return (
    <div className={AddTopBarStyle}>
      <h3 className='top-bar-text'>
        Crea campañas de correo electrónico personalizadas, analiza las métricas
        clave de rendimiento y transforma la información en resultados con las
        herramientas de email marketing de Mailchimp.
      </h3>
      <div className='top-bar-btn-container'>
        <button className='top-bar-btn-action' type="button">Ver más</button>
      </div>
    </div>
  );
};

export { AddTopBar };
