import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import Footer from "./Components/Pages/Footer";
import Header from "./Components/Pages/Header/Header";
import Login from "./Components/Pages/Login/Login";
import SignUp from "./Components/Pages/Login/SignUp";

function App() {
  return (
    <div >
     <Header></Header>
     <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
     </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
