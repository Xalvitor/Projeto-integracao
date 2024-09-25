import AboutUs from "./pages/about-us";
import Dashboard from "./pages/dashboard";
import Details from "./pages/details";
import FormProduct from "./pages/form-product";
import Home from "./pages/home";
import ListAllProducts from "./pages/list-all-products-order";
import ListRecentProducts from "./pages/list-recent-products";
import Login from "./pages/login";
import NotFound from "./pages/not-found";
import Register from "./pages/register";
import SearchProducts from "./pages/search-result";
import Talkwithus from "./pages/talk-with-us";
import Userproducts from "./pages/user-products";
import "./style.css"
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
    path: "/all-recent-products",
    element: <ListRecentProducts/>
  },
  {
    path: "/all-products",
    element: <ListAllProducts/>
  },
  {
    path: "/products/details",
    element: <Details/>
  },
  {
    path: "/products/search/:product",
    element: <SearchProducts/>
  },
  {
    path: "/Aboutus",
    element: <AboutUs/>
  },
  {
    path: "/Login",
    element: <Login/>
  },
  {
    path: "/Register",
    element: <Register/>
  },
  {
    path: "/Dashboard",
    element: <Dashboard/>
  },
  {
    path: "/My-products",
    element: <Userproducts/>
  },
  {
    path: "/Form-product",
    element: <FormProduct/>
  },
  {
    path: "/Talk-with-us",
    element: <Talkwithus/>
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