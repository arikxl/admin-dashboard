import React from 'react';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';


const FeaturedInfo = () => {
    return (
        <div className="featured flex space-between">
            <div className="featured-item">
                <span className="featured-title">Revenue</span>
                <div className="featured-money-container flex align-center">
                    <span className="featured-money">$2,034</span>
                    <span className="featured-money-rate flex align-center">
                        -11.4
                        <ArrowDownward className="featured-icon negative"/></span>
                </div>
                <span className="featured-sub">Compared to last month</span>
            </div>
            <div className="featured-item">
                <span className="featured-title">Sales</span>
                <div className="featured-money-container flex align-center">
                    <span className="featured-money">$2,034</span>
                    <span className="featured-money-rate flex align-center">-11.4
                        <ArrowDownward className="featured-icon negative"/></span>
                </div>
                <span className="featured-sub">Compared to last month</span>
            </div>
            <div className="featured-item">
                <span className="featured-title">Cost</span>
                <div className="featured-money-container flex align-center">
                    <span className="featured-money">$2,034</span>
                    <span className="featured-money-rate flex align-center">+3.4
                        <ArrowUpward className="featured-icon"/></span>
                </div>
                <span className="featured-sub">Compared to last month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo
