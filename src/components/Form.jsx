import { useState, useEffect } from 'react';
import { Box, TextField, Button, makeStyles } from '@material-ui/core';
import { getWeather } from '../services/api';
import Information from './Information';
import "./form.css"



const Form = () => {

    const [ city, setCity ] = useState('');
    const [ country, setCountry ] = useState('');
    const [ click, handleClick ] = useState(false);
    const [ data, setData ] = useState();

    useEffect(() => {
        const weatherInfo = async () => {
            city && await getWeather(city, country).then(response => {
                setData(response.data);
            })
        }
        weatherInfo();
        console.log(city, country);
        console.log(data);
        handleClick(false);
    }, [click]);

    const handleCityChange = (city) => {
        setCity(city);
    }

    const handleCountryChange = (country) => {
        setCountry(country);
    }

    return (
        <>

            <Box className="focomponent">
            <h1 className='logo'>Weather App</h1>
                <div className="labelcity">City</div>
                <TextField 
                   
                    onChange={(e) => handleCityChange(e.target.value)} 
                  
                    
                    className="forminput"
                    
                />
                <div className="labelcountry">Country</div>
                <TextField 
                   
                    onChange={(e) => handleCountryChange(e.target.value)} 
                   
                    
                    className="forminput"
                   
                />
                <div className="buttondiv">
                <button 
                    variant="contained" 
                    onClick={() => handleClick(true)}
                    className="buttonG"
                >Get Weather</button>
                </div>
            </Box>
            <Information data={data} city={city} country={country} />
        </>
    )
}

export default Form;