import axios from "axios";
import React,{useState} from "react";

const Header = () => {
    const[data,setData]=useState("");

    function changeValue(e) {
        console.log(e.target.value)
         setData(e.target.value)
         console.log(data)

    }
    function submitData(){
        const storeData=data
        axios.get(`http://localhost:5000/api/search?keyword=${storeData}`)
      .then((response) => {
        console.log(response.data); 
      })
      .catch((error) => {
        console.error("Error while fetching data:", error);
      });
    }
   
    return(
        <div>
        <input type="text"  onChange={changeValue} value={data} placeholder="Search"/>
        <button class="btn btn-outline-success" type="submit" onClick={submitData}>Search</button>
      
      </div>

    )
   
};
export default Header;


// import { useEffect, useState } from 'react';
// import axios from 'axios';


// const Header = () => {
//   const [value, setValue] = useState('');
//   const [suggestions, setSuggestions] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//         console.log(value)
//       try {
//         const { data } = await axios.get(
//           `https://dummyjson.com/products/search?q=${value}`
//         );

//         setSuggestions(data.products);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, [value]);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search data..."
//         value={value}
//         onChange={(e) => {
//             console.log(e.target.value)
//           setValue(e.target.value);
//         }}
//       />
//     </div>
//   );
// };

// export default Header;
