import { useState, useEffect } from "react";
import axios from "axios";

const url = "http://api.weatherapi.com/v1/current.json?key=5bbc252706384032a3024839242804";

export const useWeatherData = (query) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    console.log(query);

    const fetchData = async (query) => {
        const response = await axios.get(`${url}&q=${query}&aqi=no`)
            .then((response) => {
                setData(response.data);
                setLoading(false);
            }).catch(() => {
                setLoading(true);
            })
            .finally(() => {
                setLoading(true);
            })
    };
    useEffect(() => {
        fetchData(query);
    }, [query]);

    return { data, fetchData, loading };
};
