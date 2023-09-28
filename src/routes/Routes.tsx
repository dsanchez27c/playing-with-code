// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Catalogue from '../views/catalogue/Catalogue';
// import About from '../views/about/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './../views/home/Home';
import ErrorPage from '../views/error/ErrorPage';
import UILayout from '../views/uiLayout/UILayout';

const router: any = createBrowserRouter([
  {
    path: '/',
    element: <UILayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/catalogue',
        element: <>Esta es la página de Catalogo.</>
      },
      {
        path: '/about',
        element: <>Esta es la página de Acerca De.</>
      },
      {
        path: '/comunity',
        element: <>Esta es la página de Comunidad.</>
      }
    ]
  }
  // {
  //   path: "/",
  //   element: <Home />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/catalogue",
  //   element: <>Esta es la página de Catalogo.</>,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/about",
  //   element: <>Esta es la página de Acerca De.</>,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/comunity",
  //   element: <>Esta es la página de Comunidad.</>,
  //   errorElement: <ErrorPage />,
  // },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
