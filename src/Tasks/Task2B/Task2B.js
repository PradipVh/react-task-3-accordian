import React, { useState } from "react";

function Task2B() {

    const [phoneInput, setPhoneInput] = useState(false);
    const [emailInput, setEmailInput] = useState(false);

    const handlePhoneInput = () => {
        setPhoneInput(true);
        setEmailInput(false)
    }
    const handleEmailInput = () => {
        setEmailInput(true)
        setPhoneInput(false)
    }
    return (
        <div className="container border p-4 mt-5">
            <form>
                <div className="row">
                    <div className="col-md-6">
                        <label>FirstName</label>
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>
                    <div className="col-md-6 mt-3 mt-md-0">
                        <label>LastName</label>
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>
                    <div className="col-md-6 pt-3">
                        <div>
                            How should we contact you?
                        </div>
                        <div onClick={handlePhoneInput} className="form-check form-check-inline col-sm-3 pt-3">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label className="form-check-label" htmlFor="inlineRadio1">Phone</label>
                        </div>
                        <div onClick={handleEmailInput} className="form-check form-check-inline col-sm-3 pt-3">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label className="form-check-label" htmlFor="inlineRadio2">Email</label>
                        </div>

                    </div>
                    {phoneInput && <div className="col-md-6 pt-3">
                        <label>Phone Number</label>
                        <input type="number" className="form-control" placeholder="Enter Number" />
                    </div>}
                    {emailInput && <div className="col-md-6 pt-3">
                        <label>Email Id</label>
                        <input type="email" className="form-control" placeholder="Enter Email" />
                    </div>}
                </div>
            </form>
        </div>
    )
}
export default Task2B;