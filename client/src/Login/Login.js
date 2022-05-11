import React , {useState,useEffect} from 'react'
import axios  from 'axios'
import "./Login.css"
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'
import ImgLock from "./lock.png"

function Login() {

  let navigate = useNavigate();

  useEffect(() =>{
    if(localStorage.getItem('email') && localStorage.getItem('fullName'))
        {
           navigate("/dashboard")
        }

  }, [])

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function checkLogin(){
    const response = await axios.post("/user/login",{
      email: email,
      password: password,
    })
    if(response.data.status === "success"){
      localStorage.setItem("email", response.data.user.email);
      localStorage.setItem("fullName", response.data.user.fullName);

      Swal.fire({
        title: 'Success!',
        text: 'Login Sucess🤗...',
        icon: 'success'
      })
      navigate("/dashboard")
      
    }
    
    else{
      Swal.fire({
        title: 'Error!',
        text: 'Login Failed...😭',
        icon: 'error',
        confirmButtonText: 'Try Again'

        
      })

    }
  }


    return(
        <div className='container'>
            <div className="title-container">
            <h1 className="text-center">Admin Login</h1>
            </div>
            
           <div className="admin-login">
             <img src={ ImgLock}  className="img-lock" alt="lock"/>
             <form>
             <div className="mb-4">
               <label for="userEmail" class="form-label">Email address</label>
               <input type="email"
                class="form-control"
                 id="userEmail"
                 placeholder="name@example.com"
                 onChange={(e) => setEmail(e.target.value)} />
                 
            </div>
            <div className="mb-4">
               <label for="userPassword" class="form-label">Password</label>
               <input type="password"
                class="form-control"
                 id="userPassword"
                 placeholder="password@123" 
                 onChange={(e) => setPassword(e.target.value)} />
                 
                 
             </div>

             <div className="mb-4">
                 <button type="button" className="btn btn-warning  btn-lg btn-login"
                 onClick={checkLogin}
                 >Login</button>
             </div>
            </form>
          </div>
      </div>
         

    )
}

export default Login