import React from 'react'

const NewUser = () => {
    return (
        <div className="new-user-container">
            <h1 className="new-user-title">New User</h1>
            <form className="new-user-form flex">
                <div className="new-user-form-item">
                    <label>Username</label>
                    <input type="text" placeholder="arikxl" />
                </div>
                <div className="new-user-form-item">
                    <label>Full Name</label>
                    <input type="text" placeholder="Arik Alexandrov" />
                </div>
                <div className="new-user-form-item">
                    <label>Email</label>
                    <input type="email" placeholder="arikxl@gmail.com" />
                </div>
                <div className="new-user-form-item">
                    <label>Password</label>
                    <input type="password" placeholder="Password" />
                </div>
                <div className="new-user-form-item">
                    <label>Phone</label>
                    <input type="text" placeholder="+972 050 1234567" />
                </div>
                <div className="new-user-form-item">
                    <label>Address</label>
                    <input type="text" placeholder="Beer Sheva | Israel" />
                </div>
                <div className="new-user-form-item">
                    <label>Gender</label>
                    <div className="new-user-gender">
                        <input type="radio" name="gender" value="male" id="male" />
                        <label for="male">Male</label>
                        <input type="radio" name="gender" value="female" id="female" />
                        <label for="female">Female</label>
                        <input type="radio" name="gender" value="other" id="other" />
                        <label for="other">Other</label>
                    </div>
                </div>
                <div className="new-user-form-item">
                    <label>Active</label>
                    <select name="active" id="active" className="new-user-select">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                    <button className="new-user-btn">
                        Create
                    </button>
            </form>
        </div>
    )
}

export default NewUser
