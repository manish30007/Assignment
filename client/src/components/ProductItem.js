import React from 'react'
import { useStore } from "../store";
const ProductItem = (props) => {
    const currentId = useStore((state) => state.currentId);
    
    const{product,updateProduct,deleteProduct}=props;
  return (
    <div className='my-3'>
    <div className="card" >
   
   <img style={{height:"300px"}}src="" className="card-img-top" alt=""/>
    <div className="card-body">
      
    <h5 className="card-title">Product Name:{product.productname}</h5>
    <h6 className="card-title">Price:Rs{product.sellingprice}</h6>
    <p className="card-text my-2"><b>Description:</b>{product.description}...</p>
    {/* <a to="" target="_blank"  rel="noreferrer"  className=" btn-sm btn-dark">Read More</a> */}
    <i className="fas fa-trash mx-3"  onClick={()=>{deleteProduct(product._id);}} style={{cursor:"pointer"}}></i>
    <i className="fa-regular fa-pen-to-square mx-3" onClick={()=>{updateProduct(product)}} style={{cursor:"pointer"}}></i>
    </div>
    </div>
    </div>    
  )
}

export default ProductItem
