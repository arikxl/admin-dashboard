import React from 'react';
import {
    LineStyle, Timeline, TrendingUp, Report, WorkOutline,
    PermIdentity, Storefront, AttachMoney, BarChart, MailOutline,
    DynamicFeed, ChatBubbleOutline
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Dashboard</h3>
                    <ul className="sidebar-list clean-list">
                        <li className="sidebar-list-item flex align-center active">
                            <LineStyle className="sidebar-icon" /> Home
                        </li>
                        <li className="sidebar-list-item flex align-center">
                            <Timeline className="sidebar-icon" /> Analytics
                        </li>
                        <li className="sidebar-list-item flex align-center">
                            <TrendingUp className="sidebar-icon" /> Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Quick Menu</h3>
                    <ul className="sidebar-list clean-list">
                        <Link to="/users">
                            <li className="sidebar-list-item flex align-center">
                                <PermIdentity className="sidebar-icon" /> Users
                            </li>
                        </Link>
                        <Link to="/products">
                            <li className="sidebar-list-item flex align-center">
                                <Storefront className="sidebar-icon" /> Products
                            </li>
                        </Link>

                        <li className="sidebar-list-item flex align-center">
                            <AttachMoney className="sidebar-icon" /> Transactions
                        </li>
                        <li className="sidebar-list-item flex align-center">
                            <BarChart className="sidebar-icon" /> Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Notifications</h3>
                    <ul className="sidebar-list clean-list">
                        <li className="sidebar-list-item flex align-center">
                            <MailOutline className="sidebar-icon" /> Mail
                        </li>
                        <li className="sidebar-list-item flex align-center">
                            <DynamicFeed className="sidebar-icon" /> Feedback
                        </li>
                        <li className="sidebar-list-item flex align-center">
                            <ChatBubbleOutline className="sidebar-icon" /> Message
                        </li>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Staff</h3>
                    <ul className="sidebar-list clean-list">
                        <li className="sidebar-list-item flex align-center">
                            <WorkOutline className="sidebar-icon" /> Manage
                        </li>
                        <li className="sidebar-list-item flex align-center">
                            <Timeline className="sidebar-icon" /> Analytics
                        </li>
                        <li className="sidebar-list-item flex align-center">
                            <Report className="sidebar-icon" /> Reports
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default SideBar
