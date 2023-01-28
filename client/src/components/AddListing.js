import React from 'react'
import Add1 from './Add1'
// import Add2 from './Add2'
// import Add3 from './Add3'
import "./AddListing.css"
const AddListing = () => {
    const list={
     sellersku:"",
     listingstatus:"",
     mrp:"",
     sellingprice:"",
     fullfilmentby:"",
     procurement:"",
     stock:"",
     localdelivercharge:"",
     zonaldelivercharge:"",
     nationaldelivercharge:"",
     packerweight:"",
     packetlength:"",
     packetheight:"",
     hsn:"",
     taxcode:"",
     countryoforigin:"",
     modalname:"",
     modalnumber:"",
     capacity:"",
     brandcolor:"",
     type:"",
     packof:"",
     bodymaterial:"",
     color:"",
     searchkeyword:"",
     keyfeatures:"",
     warranty:""
    }
   const handlesubmit1=( sellersku,
   listingstatus,
   mrp,
   sellingprice,
   fullfilmentby,
   procurement,
   stock,
   localdelivercharge,
   zonaldelivercharge,
   nationaldelivercharge,
   packerweight,
   packetlength,
   packetheight,
   hsn,
   taxcode,
   countryoforigin)=>{

   
   }
   const handlesubmit2=()=>{}
   const handlesubmit3=()=>{}
  return (
  <>
  <div class="container">
  <div class="row row-cols-2">
    <div class="col">
    <div class="card text-center" style={{height:'85vh'}}>
  <div class="card-header">
    Add images
  </div>
  <div class="card-body" style={{textAlign:'center'}}>
    
    <a href="#" class="btn btn-primary">browse</a>
  </div>
  <div class="card-footer text-muted">
    
  </div>
</div>
    </div>
    <div class="col">
    <div class="card" style={{height:'85vh',overflow:'scroll'}} >
  <div class="card-header">
  </div>
  <div class="card-body">
  <Add1 list={list} handlesubmit1={handlesubmit1}/>
  {/* <Add2 list={list} handlesubmit2={handlesubmit2}/> */}
  {/* <Add3 list={list} handlesubmit3={handlesubmit3}/> */}
  </div>
</div>
  
    </div>
   
  </div>
</div>
  
  </>
  )
}

export default AddListing
