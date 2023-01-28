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
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Login to Sellers</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
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
  <div class="mb-1" style={{fontSize:".84rem"}}>
  <label for="exampleInputEmail1" class="form-label">By continuing, I agree to Sellers's Terms of Use & Privacy Policy      
  </label></div>
  <button type="submit" className="btn btn-primary">Login</button>
</form>
</div>  
    </div>
      </div>
      <div class="modal-footer">
        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
        {/* <button type="button" class="btn btn-primary">Login</button> */}
      </div>
    </div>
  </div>
</div>
</>
  )
}
export default Login
