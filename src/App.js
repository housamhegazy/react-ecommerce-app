import Root from "./Root";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Cart from "pages/Cart";
import ProductDetails from "pages/ProductDetails";
import Errorpage from "pages/Errorpage";
import FovaritePage from "pages/FovaritePage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="ProductDetails/:id" element={<ProductDetails />} />
      <Route path="fovaritepage" element={<FovaritePage />} />
      <Route path='*' element={<Errorpage/>} />
      
      {/* ... etc. */}
    </Route>
  )
);
function App() {
  return (
    
    <div className="App">
          <RouterProvider router={router} />
    </div>
 
  );
}

export default App;
