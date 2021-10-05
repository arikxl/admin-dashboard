import React from 'react';
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

const TopBar = () => {
    return (
        <div className="topbar">
            <div className="topbar-wrapper flex space-between align-center">
                <div className="top-left flex">
                    <span className="logo">inertia⚡admin</span>
                </div>
                <div className="top-right flex align-center">
                    <div className="topbar-icon-container">
                        <NotificationsNone />
                        <span className="top-icon-badge flex align-center justify-center">2</span>
                    </div>
                    <div className="topbar-icon-container">
                        <Language />
                        <span className="top-icon-badge flex align-center justify-center">2</span>
                    </div>
                    <div className="topbar-icon-container">
                        <Settings />
                    </div>
                    <img src="https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.6435-9/76619250_247201626253941_4195194514224185344_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=oN1HrlzF65oAX-UgaTw&_nc_ht=scontent.fhfa1-1.fna&oh=fa1cdcd587f623fc8b5679094ec0f84f&oe=618273C3" alt="" className="top-avatar" />
                </div>
            </div>
        </div>
    )
}

export default TopBar
