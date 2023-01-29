import React, { useState } from "react";
import axios from "axios";
import { useStore } from "../store";
import { useToaster,Message} from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "./AddListing.css";
import { useNavigate} from "react-router-dom";
const AddListing = () => {
  const toaster = useToaster();
  let navigate = useNavigate();

  const currentId = useStore((state) => state.currentId);
  
  var [pssi, setPssi] = useState({
    file:"",
    productcategory: "",
    sellingprice: "",
    stock: "",
    delivercharge: "",
    productname: "",
    packof: "",
    description: "",
    searchkeyword: "",
  });
  const handlechange = async (e) => {
    e.preventDefault();
    setPssi({ ...pssi, [e.target.name]: e.target.value });
    console.log(pssi);
  };
  function handleImage(e){
setPssi({...pssi,[e.target.name]:e.target.files[0]})
console.log(pssi);
  }

  
  const handleClick = (e) => {
    e.preventDefault();
    // console.log("product ", pssi);
     const result  = {
      pssi,
      currentId
    };
    //  console.log(result);
    axios
      .post("http://localhost:8000/api/product", result)
      .then((res) => {
        setPssi({
          file:"",
          productcategory: "",
          sellingprice: "",
          stock: "",
          delivercharge: "",
          productname: "",
          packof: "",
          description: "",
          searchkeyword: "",
        });
        toaster.push(
          <Message type="success" closable>
           Product Added successfully
          </Message>
        );
        console.log(" product added successfully ");
        navigate("/listing")
      })
      .catch((err) => {
        console.log("Error couldn't create pro");
        <Message type="error" closable>
          error product not added
         </Message>
        console.log(err.response.message);
      });
  };
  return (
    <>
    
      <div className="container">
        
         

          {/* product details */}
          <div className="" style={{marginLeft:"20%",marginRight:"20%"}}>
            <div
              className="card"
              style={{ width:"600px"}}
            >
              <div className="card-header">Add Product Details</div>
              <div className="card-body">
                <div className="container">
                  <form>
                    <div className="mb-3">
                      <label className="col-md-4 setwidth control-label">
                        Product Name*
                      </label>
                      <input
                        style={{ fontSize: ".95rem" }}
                        type="text"
                        name="productname"
                        className="form-control"
                        id="productname"
                        value={pssi.productname}
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
                        name="productcategory"
                        className="form-control"
                        id="productcategory"
                        value={pssi.productcategory}
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
                        name="sellingprice"
                        className="form-control"
                        id="sellingprice"
                        value={pssi.sellingprice}
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
                        name="stock"
                        className="form-control"
                        id="stock"
                        value={pssi.stock}
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
                        name="delivercharge"
                        className="form-control"
                        id="delivercharge"
                        value={pssi.delivercharge}
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
                        name="packof"
                        className="form-control"
                        id="packof"
                        value={pssi.packof}
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
                        name="description"
                        className="form-control"
                        id="description"
                        value={pssi.description}
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
                        name="searchkeyword"
                        className="form-control"
                        id="searchkeyword"
                        value={pssi.searchkeyword}
                        onChange={handlechange}
                        placeholder=""
                        aria-describedby="emailHelp"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={handleClick}
                    >
                      Add Product
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default AddListing;
