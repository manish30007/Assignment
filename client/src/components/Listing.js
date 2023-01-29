import React, { useState,useEffect } from 'react'
// import axios from 'axios'
import { useNavigate} from "react-router-dom";
import { useStore } from "../store";
const Listing = () => {
  const [prods, setProds]=useState([])
  let navigate = useNavigate();
  const currentId = useStore((state) => state.currentId);
  
  const getProduct=async()=>{

    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    const response = await fetch(`http://localhost:8000/api/product `, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
    
      headers: {
        'Content-Type': 'application/json',
        'auth-token':currentId
      },

    });
     const json=await response.json(); 
     console.log(json); 
     setProds(json);   
     console.log('getproductcalled');
  }
  useEffect(() => {
    if (currentId) {
      getProduct();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      
    </div>
  )
}

export default Listing
