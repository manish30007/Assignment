import React from 'react'

const Login = () => {
    const handleClick=()=>{
    
    }
    const onChange=()=>{
    
    }
    const credentials={
        email:"",
        password:""
    }
  return (
<>
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Login to Sellers</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div>
   <div className="container my-3">   
   
    <form onSubmit={handleClick}>
  <div className="mb-3 my-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="email" name="email" value={credentials.email} aria-describedby="emailHelp" onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor='password' className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange}/>
  </div>
  <div className="mb-1" style={{fontSize:".84rem"}}>
  <label for="exampleInputEmail1" className="form-label">By continuing, I agree to Sellers's Terms of Use & Privacy Policy      
  </label></div>
  <button type="submit" className="btn btn-primary">Login</button>
</form>
</div>  
    </div>
      </div>
      <div className="modal-footer">
        {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
        {/* <button type="button" className="btn btn-primary">Login</button> */}
      </div>
    </div>
  </div>
</div>
</>
  )
}
export default Login
