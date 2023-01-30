import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate} from "react-router-dom";
import { useStore } from "../store";
import { useToaster,Message} from "rsuite";
import "rsuite/dist/rsuite.min.css";

const Login = () => {
  const toaster = useToaster();
  let navigate = useNavigate();
  
  const currentName = useStore((state) => state.currentName);
  const currentEmail = useStore((state) => state.currentEmail);
  const currentId = useStore((state) => state.currentId);
  const { setCurrentName, setCurrentEmail, setCurrentId} = useStore();
  const [logindata, setLoginData] = useState({
    email: "",  
    password: "",
  });
    const handleClick=(e)=>{
      e.preventDefault();
      console.log("logindata ", logindata);
      axios.post("http://localhost:8000/api/vendor/login", logindata)
        .then((res) => {
          localStorage.setItem("token",res.data.data._id );
          setCurrentName(res.data.data.name);
          setCurrentEmail(res.data.data.email);
          setCurrentId(res.data.data._id);
          setLoginData({ email: "",
          password: ""
        })
        toaster.push(
          <Message type="success" closable>
           lOGIN successfully
          </Message>
        );
        console.log(currentId);
        navigate("/home")
          console.log(res.data.message, " mess2 printed ");
          console.log(currentId);
        })

        .catch((err) => {
         alert('invalid credentials')
            console.log("Error couldn't login");
          console.log(err.response.data);
        });
    }
    const onChange=(e)=>{
      setLoginData((data) => ({ ...data, [e.target.name]: e.target.value }));
      console.log(logindata)
    }
 
  return (
<>

    
      <div className='mx-3' style={{width:'40%'}}>
   <div className="container my-3">   
   
    <form onSubmit={handleClick}>
  <div className="mb-3 my-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input name="email" type="email" className="form-control" id="email"  value={logindata.email} aria-describedby="emailHelp" onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor='password' className="form-label">Password</label>
    <input name="password" type="password" className="form-control" id="password"  value={logindata.password} onChange={onChange}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Login</button>
</form>
</div>  
    </div>
     
</>
  )
}
export default Login
