import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate=useNavigate()

const handleClick=()=>{
  navigate('/form')
}


  return (
    <div className='container '>
      <div className='col-sm-6 offset-sm-3 border p-4 rounded shadow-lg' >
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="email" className="form-control" id="username" aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <button type="submit" className="col-12 btn btn-primary">Login</button>
          <div className=' m-3'>
            <span>Not Registered yet?</span><a href="#" className="badge" onClick={handleClick}>Register</a>

          </div>

        </form>
      </div>
    </div>
  )
}

export default Login