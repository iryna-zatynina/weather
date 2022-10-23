import React, {useEffect, useState} from 'react';
import Header from "../../Components/Header/Header";
import SearchCity from "../../Components/SearchCity/SearchCity";
import ForecastInfo from "../../Components/ForecastInfo/ForecastInfo";
import axios from "axios";

const Forecast = () => {
    useEffect(() => {
        axios.get('https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=b2714a5cbe36acd4448f2292ecddf4ed&q=Kharkiv')
            .then((response) => {
                const info = response.data;
                setForecastInfo({
                    name: info.name,
                    icon: "",
                    temp: Math.round(info.main.temp),
                    feel: Math.round(info.main.feels_like),
                    pressure: info.main.pressure,
                    humidity: info.main.humidity,
                    wind: info.wind.speed,
                })
            })
    }, [])
    const [city, setCity] = useState('');
    const [message, setMessage] = useState('')
    const [forecastInfo, setForecastInfo] = useState({
        name: '',
        icon: '',
        temp: '',
        feel: '',
        pressure: '',
        humidity: '',
        wind: '',
    });

    const handleCity = (e) => {
        setMessage("");
        setCity(e.target.value);
    }
    const getForecast = (e) => {
        e.preventDefault();
        axios.get(`https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=b2714a5cbe36acd4448f2292ecddf4ed&q=${city}`)
            .then((response) => {
                const info = response.data;
                setForecastInfo({
                    name: info.name,
                    icon: "",
                    temp: Math.round(info.main.temp),
                    feel: Math.round(info.main.feels_like),
                    pressure: info.main.pressure,
                    humidity: info.main.humidity,
                    wind: info.wind.speed,
                })
            })
            .catch(() => {
                setMessage("There is no such city");
            })
        setCity('');
    }
    return (
        <div>
            <Header/>
            <SearchCity city={city} handleCity={handleCity} getForecast={getForecast} message={message}/>
            <ForecastInfo forecastInfo={forecastInfo}/>
        </div>
    );
};

export default Forecast;