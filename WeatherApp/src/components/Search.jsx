import React, { useState } from 'react'
import SearchBox from './SearchBox';
import Data from './Data';

const Search = () => {

    const apiKey = "ced6adac01054687f0ab071da576e010";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


    let [city, setCity] = useState("");

    let [res, setRes] = useState({
        main: { 
            humidity : 0,
            pressure : 0,
            temp : 0, },
        name : "",
        weather : [{
            main: "",
            description: ""
        }],
    });

    let handle = (e) => {
        setCity(e.target.value);
    }

    let search =  async () => {

        if(city === "") alert("Please Enter the city!")

        else {
            let response = await fetch(apiUrl + city + `&appid=${apiKey}`);

            if(response.status == 404) alert("Please enter correct city name!")
            else {
                let jsonResponse = await response.json();
                setCity("")
                setRes(jsonResponse)
            } 
        } 

    }

    return (
    <>
        
        <SearchBox city={city} handle={handle} search={search}/>

        <Data 
            main={res.weather[0].main}
            desc={res.weather[0].description} 
            temp={Math.floor(res.main.temp)}
            city={res.name}
            humi={res.main.humidity}
            press={res.main.pressure}
        />

    </>
  )
}

export default Search