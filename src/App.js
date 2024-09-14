import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import Update from "./components/Update";
import { useSelector } from "react-redux";
function App() {

  const update = useSelector((state)=>state.cart.update);

  return (
    <div>
      
      <div className="bg-slate-900">
       {update ? <Update/>:<Navbar/>}
      </div>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
