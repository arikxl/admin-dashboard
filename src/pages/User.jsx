import React from 'react';
import { PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish } from '@material-ui/icons';

const User = () => {
    return (
        <div className="user-container">
            <div className="user-title-container flex align-center space-between">
                <h1 className="user-title">Edit User</h1>
                <button className="user-add-btn">Create</button>
            </div>
            <div className="user-info-container flex">
                <div className="user-display">
                    <div className="user-display-top flex align-center">
                        <img src="https://cdn.pixabay.com/photo/2017/08/31/09/01/woman-2699801_1280.jpg" alt="" className="user-display-img" />
                        <div className="user-display-top-title flex column">
                            <span className="user-display-username">Ania Kubow</span>
                            <span className="user-display-user-title">Software Engineer</span>
                        </div>
                    </div>
                    <div className="user-display-bottom">
                        <span className="user-show-title">Account Details</span>
                        <div className="user-show-info">
                            <PermIdentity className="user-show-icon" />
                            <span className="user-show-info-title">aniakubow99</span>
                        </div>
                        <div className="user-show-info">
                            <CalendarToday className="user-show-icon" />
                            <span className="user-show-info-title">29/02/1990</span>
                        </div>
                        <span className="user-show-title">Contact Details</span>
                        <div className="user-show-info">
                            <PhoneAndroid className="user-show-icon" />
                            <span className="user-show-info-title">+972 050 1234567</span>
                        </div>
                        <div className="user-show-info">
                            <MailOutline className="user-show-icon" />
                            <span className="user-show-info-title">aniakubow99@gmail.com</span>
                        </div>
                        <div className="user-show-info">
                            <LocationSearching className="user-show-icon" />
                            <span className="user-show-info-title">London | England</span>
                        </div>

                    </div>
                </div>
                <div className="user-update">
                    <span className="user-update-title">Edit</span>
                    <div className="user-update-form flex space-between">
                        <div className="user-update-left">
                            <div className="user-update-item">
                                <label >Username: </label>
                                <input type="text"
                                    placeholder="aniakubow99"
                                    className="user-update-input" />
                            </div>
                            <div className="user-update-item">
                                <label >Full Name: </label>
                                <input type="text"
                                    placeholder="Ania Kubow"
                                    className="user-update-input" />
                            </div>
                            <div className="user-update-item">
                                <label >Email: </label>
                                <input type="text"
                                    placeholder="aniakubow99@gmail.com"
                                    className="user-update-input" />
                            </div>
                            <div className="user-update-item">
                                <label >Phone: </label>
                                <input type="text"
                                    placeholder="+972 050 1234567"
                                    className="user-update-input" />
                            </div>
                            <div className="user-update-item">
                                <label >Address: </label>
                                <input type="text"
                                    placeholder="London | England"
                                    className="user-update-input" />
                            </div>

                        </div>
                        <div className="user-update-right flex column space-between">
                            <div className="user-update-upload flex align-center">
                                <img src="https://cdn.pixabay.com/photo/2017/08/31/09/01/woman-2699801_1280.jpg" alt="" className="user-display-img" alt="" />
                                <label htmlFor="file"><Publish classname="user-update-icon"/></label>
                                <input type="file" id="file" style={{display: "none"}} />
                            </div>
                            <button className="user-update-btn">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
