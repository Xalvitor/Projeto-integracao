import AboutUs from "./pages/about-us";
import Details from "./pages/details";
import Home from "./pages/home";
import ListProducts from "./pages/list-products"
import NotFound from "./pages/not-found";
import SearchProducts from "./pages/search-result";
import "./style.css"
import UserTemplate from "./templates/user-template"
import "react-responsive-carousel/lib/styles/carousel.min.css";


import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/products",
    element: <ListProducts/>
  },
  {
    path: "/products/details",
    element: <Details/>
  },
  {
    path: "/products/search",
    element: <SearchProducts/>
  },
  {
    path: "/Aboutus",
    element: <AboutUs/>
  },
  {
    path: "*",
    element: <NotFound/>
  },
]);
export default function App(){
  return(
    <div >
      <RouterProvider router={router}/>
      <BrowserRouter>

      </BrowserRouter>


    </div>
  )
}