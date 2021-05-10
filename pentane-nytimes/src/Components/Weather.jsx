import React from 'react'
import axios from "axios";

const weather_key = process.env.REACT_APP_WEATHER_KEY;

const Weather = () => {
    const [lati, setLat]= React.useState("")
    const [long, setLon]= React.useState("")
    const [weather, setWeather] = React.useState([])

    const GetLocation = ()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            return (setLat(position.coords.latitude),
                     setLon(position.coords.longitude)
            )
            
        })
    }

    const options = {
        method: 'GET',
        url: 'https://api.weatherbit.io/v2.0/current',
        params: {lat: lati, lon: long , key: weather_key},
        headers: {}
    };

    const getWeather = ()=>{
        axios.request(options).then(function (response) {
            setWeather(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }
    
    const {data} = weather
    // console.log(data);
        
    React.useEffect(()=>{
        GetLocation()
        getWeather()
    },[lati, long])
    // console.log(lat, lon)
    return(
        <div style = {{height:"70px", width:"150px", fontSize:"13px"}}>

          {data && <>
                        <div style = {{display:"flex", justifyContent:"space-evenly"}}>
                                <div>
                                <img src={`https://www.weatherbit.io/static/img/icons/${data[0].weather.icon}.png`} style = {{width:"30px" , height:"30px"}} alt={data[0].weather.description}/>
                                </div>
                                <div> Temp:  {data[0].temp}&deg;C</div>
                                
                            </div>
                            <div style = {{display:"flex", justifyContent:"space-evenly"}}>
                                <div>{data[0].city_name}</div>
                                <div>Wind: {data[0].wind_spd} m/s</div>
                            </div>
                             </>
            } 
        </div>
    )
    
}

export default Weather