import React from "react";
import {Route, Routes} from "react-router";
import Landing from "../Pages/Landing/Landing";
import Forecast from "../Pages/Forecast/Forecast"

const useRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/forecast" element={<Forecast />} />
        </Routes>
    )
}

export default useRoutes;