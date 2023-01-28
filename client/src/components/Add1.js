import React from 'react'
import { useState } from 'react'

const Add1 = (props) => {
    const [pssi,setpssi]=useState({
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
    })
    const onChange=(e)=>{
        setpssi({[e.target.name]:e.target.value});
    }
    const { sellersku,
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
    countryoforigin,}=pssi;
  return (
    <div className='container'>
    <div>

<form  onSubmit={props.handlesubmit1(sellersku,
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
    countryoforigin)} class="well form-horizontal" action=" " method="post"  id="contact_form">
<fieldset>

<h3>Add a Single Listing</h3>


<div class="form-group">
<label class="col-md-4 setwidth control-label">Seller SKU ID*</label>  
<div class="col-md-4 setwidth inputGroupContainer">
<div class="input-group">
<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
<input  name="sku" placeholder="" class="form-control"  type="text"  onChange={onChange}/>
</div>
</div>
</div>


<div class="form-group">
<label class="col-md-4 setwidth control-label" >Listing status*</label> 
<div class="col-md-4 setwidth inputGroupContainer">
<div class="input-group">
<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
<select name="state" class="form-control selectpicker"   onChange={onChange}>
<option value=" " >Select One</option>
<option>Active</option>
<option>Inactive</option>
</select>
</div>
</div>
</div>

 <div class="form-group">
<label class="col-md-4 setwidth control-label">MRP*</label>  
<div class="col-md-4 setwidth inputGroupContainer">
<div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
<input name="mrp" placeholder="" class="form-control"  type="text"  onChange={onChange}/>
</div>
</div>
</div>


 
<div class="form-group">
<label class="col-md-4 setwidth control-label">Your Selling Price*</label>  
<div class="col-md-4 setwidth inputGroupContainer">
<div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-earphone"></i></span>
<input name="sellingprice" placeholder="" class="form-control" type="text"  onChange={onChange}/>
</div>
</div>
</div>

<div class="form-group"> 
<label class="col-md-4 setwidth control-label">Stock*</label>
<div class="col-md-4 setwidth selectContainer">
<div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-list"></i></span>
  <input name="stock" placeholder="" class="form-control"  type="text"  onChange={onChange}/>

</div>
</div>
</div>


<div class="form-group">
<label class="col-md-4 setwidth control-label">Local Delivery Charge*</label>  
<div class="col-md-4 setwidth inputGroupContainer">
<div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
<input name="localdeliverycharge" placeholder="" class="form-control"  type="text"  onChange={onChange}/>
</div>
</div>
</div>
<div class="form-group">
<label class="col-md-4 setwidth control-label">Zonal Delivery Charge*</label>  
<div class="col-md-4 setwidth inputGroupContainer">
<div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
<input name="zonaldeliverycharge" placeholder="" class="form-control"  type="text"  onChange={onChange}/>
</div>
</div>
</div>
<div class="form-group">
<label class="col-md-4 setwidth control-label">National Delivery Charge*</label>  
<div class="col-md-4 setwidth inputGroupContainer">
<div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
<input name="nationaldeliverycharge" placeholder="" class="form-control"  type="text"  onChange={onChange}/>
</div>
</div>
</div>

<div class="form-group">
<label class="col-md-4 setwidth control-label">Packet Weight*</label>  
<div class="col-md-4 setwidth inputGroupContainer">
<div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-globe"></i></span>
<input name="packetweight" placeholder="" class="form-control" type="text"  onChange={onChange}/>
</div>
</div>
</div>
<div class="form-group">
<label class="col-md-4 setwidth control-label">Packet Length*</label>  
<div class="col-md-4 setwidth inputGroupContainer">
<div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-globe"></i></span>
<input name="packetlength" placeholder="" class="form-control" type="text"  onChange={onChange}/>
</div>
</div>
</div>
<div class="form-group">
<label class="col-md-4 setwidth control-label">Packet Height*</label>  
<div class="col-md-4 setwidth inputGroupContainer">
<div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-globe"></i></span>
<input name="packetheight" placeholder="" class="form-control" type="text"  onChange={onChange}/>
</div>
</div>
</div>
<div class="form-group">
<label class="col-md-4 setwidth control-label">HSN*</label>  
<div class="col-md-4 setwidth inputGroupContainer">
<div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-globe"></i></span>
<input name="hsn" placeholder="" class="form-control" type="text"  onChange={onChange}/>
</div>
</div>
</div>
<div class="form-group">
<label class="col-md-4 setwidth control-label">TAX CODE*</label>  
<div class="col-md-4 setwidth inputGroupContainer">
<div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-globe"></i></span>
  <select name="state" class="form-control selectpicker"   onChange={onChange}>
<option value=" " >Select One</option>
<option>GST_0</option>
<option>GST_5</option>
<option>GST_12</option>
<option>GST_18</option>
<option>GST_28</option>
<option>GST_APPAREL</option>
</select>
</div>
</div>
</div>

<div class="form-group">
<label class="col-md-4 setwidth control-label"></label>
<div class="col-md-4 setwidth">
{/* <button type="submit" class="btn btn-warning" >Save <span class="glyphicon glyphicon-send"></span></button> */}
</div>
</div>

</fieldset>
<fieldset>

{/* <legend>Add a Single Listing</legend> */}


<div class="form-group">
<label class="col-md-4 setwidth control-label">Product Name*</label>  
<div class="col-md-4 setwidth inputGroupContainer">
<div class="input-group">
<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
<input  name="modalname" placeholder="" class="form-control"  type="text"  onChange={onChange}/>
</div>
</div>
</div>



<div class="form-group">
<label class="col-md-4 setwidth control-label">Pack of*</label>  
<div class="col-md-4 setwidth inputGroupContainer">
<div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
<input  name="packof" placeholder="" class="form-control"  type="text"  onChange={onChange}/>
 
</div>
</div>
</div>


<div class="form-group"> 
<label class="col-md-4 setwidth control-label">Material*</label>
<div class="col-md-4 setwidth selectContainer">
<div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-list"></i></span>
  <input name="bodymaterial" placeholder="" class="form-control"  type="text"  onChange={onChange}/>

</div>
</div>
</div>


<div class="form-group">
<label class="col-md-4 setwidth control-label">Color*</label>  
<div class="col-md-4 setwidth inputGroupContainer">
<div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
<input name="color" placeholder="" class="form-control"  type="text"  onChange={onChange}/>
</div>
</div>
</div>
<div class="form-group">
<label class="col-md-4 setwidth control-label"></label>
<div class="col-md-4 setwidth">
{/* <button type="submit" class="btn btn-warning" >Save <span class="glyphicon glyphicon-send"></span></button> */}
</div>
</div>
<div class="form-group">
<label class="col-md-4 setwidth control-label">Description*</label>  
<div class="col-md-4 setwidth inputGroupContainer">
<div class="input-group">
<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
<input  name="searchkeyword" placeholder="" class="form-control"  type="text" onChange={onChange}/>
</div>
</div>
</div>
<div class="form-group">
<label class="col-md-4 setwidth control-label">Search Keyword*</label>  
<div class="col-md-4 setwidth inputGroupContainer">
<div class="input-group">
<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
<input  name="searchkeyword" placeholder="" class="form-control"  type="text" onChange={onChange}/>
</div>
</div>
</div>


<div class="form-group">
<label class="col-md-4 setwidth control-label" >Key Features*</label> 
<div class="col-md-4 setwidth inputGroupContainer">
<div class="input-group">
<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
<input  name="keyfeatures" placeholder="" class="form-control"  type="text" onChange={onChange}/>

</div>
</div>
</div>




<div class="form-group">
<label class="col-md-4 setwidth control-label">Warranty*</label>  
<div class="col-md-4 setwidth inputGroupContainer">
<div class="input-group">
<span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
<select name="warranty" class="form-control selectpicker" onChange={onChange}>
<option value=" " >Select One</option>
<option>No Warranty</option>
<option>1 Year</option>
<option>2 Year</option>
</select>

</div>
</div>
</div>

<div class="form-group">
<label class="col-md-4 setwidth control-label"></label>
<div class="col-md-4 setwidth">
<button type="submit" class="btn btn-warning" >Save <span class="glyphicon glyphicon-send"></span></button>
</div>
</div>

</fieldset>
</form>
</div>
</div>
  )
}

export default Add1
