import React from 'react';
import { Visibility} from '@material-ui/icons';


const WidgetSmall = () => {
    return (
        <div className="widget-small">
            <span className="widget-sm-title">New Join Members</span>
            <ul className="widget-sm-list clean-list">
                <li className="widget-sm-item flex align-center space-between">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widget-sm-img" />
                    <div className="widget-sm-user flex column">
                        <span className="widget-sm-username">Ania Kubow</span>
                        <span className="widget-sm-user-title">Software Engineer</span>
                    </div>
                    <button className="widget-sm-btn flex align-center">
                        <Visibility className="widget-sm-icon"/>
                        Display
                    </button>
                </li>
                <li className="widget-sm-item flex align-center space-between">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widget-sm-img" />
                    <div className="widget-sm-user flex column">
                        <span className="widget-sm-username">Ania Kubow</span>
                        <span className="widget-sm-user-title">Software Engineer</span>
                    </div>
                    <button className="widget-sm-btn flex align-center">
                        <Visibility className="widget-sm-icon"/>
                        Display
                    </button>
                </li>
                <li className="widget-sm-item flex align-center space-between">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widget-sm-img" />
                    <div className="widget-sm-user flex column">
                        <span className="widget-sm-username">Ania Kubow</span>
                        <span className="widget-sm-user-title">Software Engineer</span>
                    </div>
                    <button className="widget-sm-btn flex align-center">
                        <Visibility className="widget-sm-icon"/>
                        Display
                    </button>
                </li>
                <li className="widget-sm-item flex align-center space-between">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widget-sm-img" />
                    <div className="widget-sm-user flex column">
                        <span className="widget-sm-username">Ania Kubow</span>
                        <span className="widget-sm-user-title">Software Engineer</span>
                    </div>
                    <button className="widget-sm-btn flex align-center">
                        <Visibility className="widget-sm-icon"/>
                        Display
                    </button>
                </li>
                <li className="widget-sm-item flex align-center space-between">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widget-sm-img" />
                    <div className="widget-sm-user flex column">
                        <span className="widget-sm-username">Ania Kubow</span>
                        <span className="widget-sm-user-title">Software Engineer</span>
                    </div>
                    <button className="widget-sm-btn flex align-center">
                        <Visibility className="widget-sm-icon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSmall
