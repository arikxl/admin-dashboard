import React from 'react';
import Chart from '../components/Chart';

import FeaturedInfo from '../components/FeaturedInfo';
import WidgetSmall from '../components/WidgetSmall';
import WidgetLarge from '../components/WidgetLarge';
import { userData } from '../data';


const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title={"User Analytics"} grid dataKey="Active User" />
            <div className="home-widgets flex">
                <WidgetSmall />
                <WidgetLarge />
            </div>
        </div>
    )
}

export default Home
