import React, { useState, useRef } from "react";

function LogIn() {
    const [value, setValue] = useState('');

    const onChange = (event: any) => {
        setValue(event.target.value);
    };

    return (
        <div id="log_in">
            <div className="modal-content">
                <input className="modal-input" required id="log_in_email" type="text" name="email"
                       placeholder="Enter your email ..." />
                <input className="modal-input" required id="log_in_password" type="text" name="password"
                       placeholder="Enter your password ..." />

                <button onChange={onChange} type="submit" className="submit">Submit</button>
            </div>
        </div>
    )
}

export default LogIn;