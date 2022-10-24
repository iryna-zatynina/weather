import React, {useEffect, useState} from 'react';
import Header from "../../Components/Header/Header";
import SearchCity from "../../Components/SearchCity/SearchCity";
import ForecastInfo from "../../Components/ForecastInfo/ForecastInfo";
import axios from "axios";

const Forecast = () => {

    useEffect(() => {
        axios.get('https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=b2714a5cbe36acd4448f2292ecddf4ed&q=Kharkiv')
            .then((response) => {
                setData(response);
            })
    }, [])

    const [forecastInfo, setForecastInfo] = useState({});
    const [city, setCity] = useState("");
    const [message, setMessage] = useState('')

    const handleCity = (e) => {
        setMessage("");
        setCity(e.target.value);
        validation(e);
    }
    const getForecast = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=b2714a5cbe36acd4448f2292ecddf4ed&q=${city}`)
            .then((response) => {
                setData(response);
            })
            .catch(() => {
                if (city.length > 0) {
                    setMessage("There is no such city");
                } else {
                    setMessage('Enter your city')
                }
            })
        setCity('');
    }

    const setData = (result) => {
        const info = result.data;
        setForecastInfo({
            name: info.name,
            icon: "",
            temp: Math.round(info.main.temp),
            feel: Math.round(info.main.feels_like),
            pressure: info.main.pressure,
            humidity: info.main.humidity,
            wind: info.wind.speed,
        })
    }

    const validation = (e) => {
        const regex = /[a-zA-Z]+$/g;
        if (!regex.test(e.target.value) && e.target.value.length > 0) {
            setMessage("Enter latin letters")
            return false
        } else {
            setMessage("")
            return true
        }
    }
    return (
        <div>
            <Header/>
            <SearchCity city={city} setCity={setCity} handleCity={handleCity} getForecast={getForecast} message={message} validation={validation}/>
            <ForecastInfo forecastInfo={forecastInfo}/>
        </div>
    );
};

export default Forecast;