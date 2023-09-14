import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error: any = useRouteError();

  console.log(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Parece que está página ya no está en nuestros registros.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <h3>
        Visita el menú de
        <a href="/">inicio</a> de nuestra página.
      </h3>
    </div>
  );
};

export default ErrorPage;
