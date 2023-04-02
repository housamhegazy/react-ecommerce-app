import Root from "./Root";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Cart from "pages/Cart";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path='*' element={<div>error</div>} />
      
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
