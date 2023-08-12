import React from 'react'

function LoginPage() {


    const handleRegisteredPage=()=>{

    }
    
    return (

        <div className="col-sm-6 offset-sm-3">
            <div className='border border-secondary p-5 rounded shadow'>

                <form action="">
                    <div className="form-group">
                        <label for="username" type="text">Username</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label for="username" type="text">Username</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div>
                        <button className="mb-3 col-sm-12 btn btn-primary">Login</button>
                    </div>
                    <div>
                        <span className='mr-3'>Not Registered Yet?</span>
                        <a onClick={handleRegisteredPage} href="http://">Register</a>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default LoginPage