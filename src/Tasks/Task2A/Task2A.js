import React, { useState } from "react";

function Task2A() {
    const [showPhoneNumberInput, setShowPhoneNumberInput] = useState(false);
    const [showEmailIdInput, setEmailIdInput] = useState(false);
    const handleContactChange = (event) => {
        const selectedValue = event.target.value;

        if (selectedValue === "phone") {
            setShowPhoneNumberInput(true);
            setEmailIdInput(false);
        } else if (selectedValue === "email") {
            setShowPhoneNumberInput(false);
            setEmailIdInput(true);
        } else {
            setShowPhoneNumberInput(false);
            setEmailIdInput(false);
        }
    };

    return (
        <div className="container border p-4">
            <form>
                <div className="row">
                    <div className="col-md-6">
                        <label>FirstName</label>
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>
                    <div className="col-md-6">
                        <label>LastName</label>
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>

                    <div className="col-md-6 form-group pt-3">
                        <label htmlFor="contact">How should we contact you?</label>
                        <select
                            className="form-control" id="contact" onChange={handleContactChange} >
                            <option value="">Choose Option</option>
                            <option value="phone">Phone</option>
                            <option value="email">Email</option>
                        </select>
                    </div>
                {showPhoneNumberInput && (
                    <div className="col-md-6 form-group pt-2 pt-md-3">
                        <label>Phone Number</label>
                        <input type="number" className="form-control" placeholder="Enter Number" />
                    </div>)}
                {showEmailIdInput && (<div className="col-md-6 form-group pt-2 pt-md-3">
                    <label>Email Id</label>
                    <input type="email" className="form-control" placeholder="Enter Email Id" />
                </div>)}
                </div>
            </form >
        </div>
    );
}

export default Task2A;

