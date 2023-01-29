import React, { useState } from "react";
import axios from "axios";
import "./AddListing.css";
const AddListing = () => {
  var [pssi, setPssi] = useState({
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
    // console.log(pssi);
  };

  
  const handleClick = (e) => {
    e.preventDefault();
    // console.log("product ", pssi);
    axios
      .post("http://localhost:8000/api/product", pssi)
      .then((res) => {
        setPssi({
          productcategory: "",
          sellingprice: "",
          stock: "",
          delivercharge: "",
          productname: "",
          packof: "",
          description: "",
          searchkeyword: "",
        });
        console.log(" product added successfully ");
      })
      .catch((err) => {
        console.log("Error couldn't create pro");
        console.log(err.response.message);
      });
  };
  return (
    <>
      <div className="container">
        <div className="row row-cols-2">
          {/* product images */}
          <div className="col">
            <div className="card text-center" style={{ height: "85vh" }}>
              <div className="card-header">Add images</div>
              <div className="card-body" style={{ textAlign: "center" }}>
                <a href="" className="btn btn-primary">
                  browse
                </a>
              </div>
              <div className="card-footer text-muted"></div>
            </div>
          </div>

          {/* product details */}
          <div className="col">
            <div
              className="card"
              style={{ height: "85vh", overflow: "scroll" }}
            >
              <div className="card-header"></div>
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
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddListing;
