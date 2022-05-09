import React , {useState} from 'react'
import axios  from 'axios'
import "./Login.css"
import ImgLock from "./lock.png" 

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function checkLogin(){
    const responce = await axios.post("/user/login",{
      email: email,
      password: password,
    })
    if(responce.data.status === "success"){
      alert("Login Successful")
    }
    
    else{
      alert("Login Failed")

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