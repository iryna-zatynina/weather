import React from 'react';
import Header from "../../Components/Header/Header";
import SearchCity from "../../Components/SearchCity/SearchCity";
import ForecastInfo from "../../Components/ForecastInfo/ForecastInfo";

const Forecast = () => {
    return (
        <div>
            <Header />
            <SearchCity />
            <ForecastInfo />
        </div>
    );
};

export default Forecast;