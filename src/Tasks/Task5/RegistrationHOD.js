import React from 'react'

function RegistrationHOD() {
    return (



        <div className='container border p-4'>
            <form>
                <div className='form-group'>
                <div class="form-check form-check-inline">
                    <input class="form-check-input form-control" type="radio" name="hod" id="hod" value="hod"/>
                        <label class="form-check-label" for="hod">HOD</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input form-control" type="radio" name="staff" id="staff" value="staff"/>
                        <label class="form-check-label" for="staff">Staff</label>
                </div>
                </div>
                <div class="row">
                    <div class="col form-group">
                        <label for="firstname">First Name</label>
                        <input type="text" class="form-control" placeholder="First name" />
                    </div>
                    <div class="col form-group">
                        <label for="lastname">Last Name</label>
                        <input type="text" class="form-control" placeholder="Last name" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="contact">Contact</label>
                        <input type="number" class="form-control" id="contact" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="department">Department</label>
                        <select id="department" class="form-control">
                            <option selected>Sales</option>
                            <option>Administration</option>
                        </select>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="username">Username</label>
                        <input type="text" class="form-control" id="username" />
                    </div>

                    <div class="form-group col-md-6">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" />
                    </div>
                </div>

                <button type="submit" class="my-3 btn btn-primary col-sm-12">Register</button>

            </form>
            <div className='col-sm-6 offset-sm-3'>
                <span>Already Registered? <a className='ml-4' href='##javascript'>Login</a></span>
            </div>
        </div>
    )
}

export default RegistrationHOD