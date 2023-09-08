import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Catalogue from "../views/catalogue/Catalogue";
import About from "../views/about/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './../views/home/Home';
import ErrorPage from "../views/error/ErrorPage";

const router: any = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  }
])

function Routes() {
  return (
    <RouterProvider router={router} />
  )
}

export default Routes;