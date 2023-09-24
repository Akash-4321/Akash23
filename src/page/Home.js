import React, {useState, useEffect} from "react";
import "./Home.css";
//  import {toast} from "react-toastify";
import axios from "axios";
import  { Cart } from "./Cart";
import Header from "./Header";


const Home = () => {
    const[data,setData]=useState([])
    useEffect(() =>{
        axios.get('http://localhost:5000/api/get').then(e => {
            setData(e.data)
            console.log(e.data);
        })
    },[])
    return(
        <><Header/>
        <Cart data={data}/>
        </>
    )
   
};
export default Home;