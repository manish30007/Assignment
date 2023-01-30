import React, {  useRef, useState, useEffect } from "react";
import axios from 'axios'
import ProductItem   from "./ProductItem";
import { useNavigate} from "react-router-dom";
import { useStore } from "../store";
import { useToaster,Message} from "rsuite";
import "rsuite/dist/rsuite.min.css";
const Listing = () => {
  const toaster = useToaster();
  const [prods, setProds]=useState([])
  let navigate = useNavigate();
  const currentId = useStore((state) => state.currentId);
  const res ={
    currentId
  }
  const getProduct=async()=>{
    axios({
      url:"http://localhost:8000/api/product",
      method:"get",
      headers:{
        token:currentId
      }
    })
    .then((res) => {
      console.log("data",res.data);
      setProds(res.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }
  
 
          useEffect(() => {
            if (currentId) {
              getProduct();
            } else {
              navigate("/login");
            }
            // eslint-disable-next-line
          }, []);
          
         
  const deleteProduct=async(id)=>{
    console.log('11')
   
    axios({
      url:`http://localhost:8000/api/product/${id}`,
      method:"DELETE",
      headers:{
        token:currentId
      }
    })
    .then((res) => {
        console.log("data",res.data);
        const newprods=prods.filter((product)=>{return product._id!==id;
            })
            setProds(newprods);
            navigate('/listing');
        
    })
    .catch((err) => {
        console.log(err);
    });     
      

}

const ref = useRef(null);
const closeref = useRef(null);
const [product, setProduct] = useState({
  id:"",
e_file:"",
e_productcategory: "",
e_sellingprice: "",
e_stock: "",
e_delivercharge: "",
e_productname: "",
e_packof: "",
e_description: "",
e_searchkeyword: "",
});
const updateProduct=(currentproduct)=>{
  ref.current.click();
  setProduct({
  id:currentproduct._id,
e_file:currentproduct.file,
e_productcategory: currentproduct.productcategory,
e_sellingprice: currentproduct.sellingprice,
e_stock: currentproduct.stock,
e_delivercharge: currentproduct.delivercharge,
e_productname: currentproduct.productname,
e_packof: currentproduct.packof,
e_description: currentproduct.description,
e_searchkeyword: currentproduct.searchkeyword,
});
// console.log(product)
}
const handlechange = (e) => {
  setProduct({ ...product, [e.target.name]: e.target.value });
};
const handleClick = () => {
  // console.log("Updating the note...", note);
  editProduct(product);
  closeref.current.click();
};
const editProduct=async(prod)=>{
  console.log('thisiiit',prod)
console.log(prod.id);
  axios
  .put(`http://localhost:8000/api/product/${prod.id}`, prod)
  // axios({
  //   url:`http://localhost:8000/api/product/${prod.id}`,
  //   method:"PUT",
  //   body:prod,
  //   headers:{
  //     token:currentId
  //   },
   
  // })
  .then((res) => {
    navigate("/home");
   
      setProduct({  id:"",
      e_file:"",
      e_productcategory: "",
      e_sellingprice: "",
      e_stock: "",
      e_delivercharge: "",
      e_productname: "",
      e_packof: "",
      e_description: "",
      e_searchkeyword: "", });
      toaster.push(
        <Message type="success" closable>
         Product Updated successfully
        </Message>
      );
      
      console.log(res.data.message);
  })
  .catch((err) => {
    toaster.push(
      <Message type="error" closable>
       Product  updation error
      </Message>
    );
      console.log("Failed to update Emp");
      console.log(err.message);
  });
}
  return (
 <>

<button  ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Product</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="container">
                  <form>
                    <div className="mb-3">
                      <label className="col-md-4 setwidth control-label">
                        Product Name*
                      </label>
                      <input
                        style={{ fontSize: ".95rem" }}
                        type="text"
                        name="e_productname"
                        className="form-control"
                        id="productname"
                        value={product.e_productname}
                        onChange={handlechange}
                        placeholder=""
                      />
                    </div>

                    <div className="mb-3">
                      <label className="col-md-4 setwidth control-label">
                        Product Category*
                      </label>
                      <input
                        style={{ fontSize: ".95rem" }}
                        type="text"
                        name="e_productcategory"
                        className="form-control"
                        id="productcategory"
                        value={product.e_productcategory}
                        onChange={handlechange}
                        placeholder=""
                        aria-describedby="emailHelp"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="col-md-4 setwidth control-label">
                        Price*
                      </label>
                      <input
                        style={{ fontSize: ".95rem" }}
                        type="text"
                        name="e_sellingprice"
                        className="form-control"
                        id="sellingprice"
                        value={product.e_sellingprice}
                        onChange={handlechange}
                        placeholder=""
                        aria-describedby="emailHelp"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="col-md-4 setwidth control-label">
                        Stock*
                      </label>
                      <input
                        style={{ fontSize: ".95rem" }}
                        type="text"
                        name="e_stock"
                        className="form-control"
                        id="stock"
                        value={product.e_stock}
                        onChange={handlechange}
                        placeholder=""
                        aria-describedby="emailHelp"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="col-md-4 setwidth control-label">
                        Delivercharge*
                      </label>
                      <input
                        style={{ fontSize: ".95rem" }}
                        type="text"
                        name="e_delivercharge"
                        className="form-control"
                        id="delivercharge"
                        value={product.e_delivercharge}
                        onChange={handlechange}
                        placeholder=""
                        aria-describedby="emailHelp"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="col-md-4 setwidth control-label">
                        Pack of*
                      </label>
                      <input
                        style={{ fontSize: ".95rem" }}
                        type="text"
                        name="e_packof"
                        className="form-control"
                        id="packof"
                        value={product.e_packof}
                        onChange={handlechange}
                        placeholder=""
                        aria-describedby="emailHelp"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="col-md-4 setwidth control-label">
                        Description*
                      </label>
                      <input
                        style={{ fontSize: ".95rem" }}
                        type="text"
                        name="e_description"
                        className="form-control"
                        id="description"
                        value={product.e_description}
                        onChange={handlechange}
                        placeholder=""
                        aria-describedby="emailHelp"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="col-md-4 setwidth control-label">
                        Search Keywords*
                      </label>
                      <input
                        style={{ fontSize: ".95rem" }}
                        type="text"
                        name="e_searchkeyword"
                        className="form-control"
                        id="searchkeyword"
                        value={product.e_searchkeyword}
                        onChange={handlechange}
                        placeholder=""
                        aria-describedby="emailHelp"
                      />
                    </div>

                    
                  </form>
                </div>
      </div>
      <div className="modal-footer">
        <button  ref={closeref} type="button" className="btn btn-secondary d-none" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handleClick}>Save changes</button>
      </div>
    </div>
  </div>
</div>
    <div>
      <div className="container">
        <h2>All listed Product</h2>
       <div className="row">
       {prods.map((product)=>{
        return <div className="col-md-4" key={product._id}>
        <ProductItem product={product} deleteProduct={deleteProduct} updateProduct={updateProduct} />
        </div>
        })}
        </div>
        </div> 
    </div>
    </>
  )
}

export default Listing
