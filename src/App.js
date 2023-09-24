import { BrowserRouter,  Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import{ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./page/Home";
import { Button } from "reactstrap";
import Header from "./page/Header";

function App() {
  return (
   
    <Home/>
    
  )
} 

export default App;
