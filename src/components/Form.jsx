import { useState, useEffect } from 'react';
import { Box, TextField, Button, makeStyles } from '@material-ui/core';
import { getWeather } from '../services/api';
import Information from './Information';


const useStyles = makeStyles({
    component: {
        padding: 10,
        display: 'flex',
        background: '#9400D3'
    },
    input: {
        color: 'white',
        marginRight: 15
    },
    labelRoot: {
        fontSize: 15,
        color: 'white'
    },
    button: {
        background: '#7CFC00',
        color: '#fff',
        width: 170,
        height: 50,
        marginTop: 5,
        fontFamily: "bold"
    }
})

const Form = () => {
    const classes = useStyles();
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
            <Box className={classes.component}>
                <TextField 
                    InputProps={{className: classes.input}} 
                    onChange={(e) => handleCityChange(e.target.value)} 
                    className={classes.input} 
                    label="City" 
                    InputLabelProps={{
                        classes: {root: classes.labelRoot}
                    }}
                />
                <TextField 
                    InputProps={{className: classes.input}} 
                    onChange={(e) => handleCountryChange(e.target.value)} 
                    className={classes.input} 
                    label="Country" 
                    InputLabelProps={{
                        classes: {root: classes.labelRoot}
                    }}
                />
                <Button 
                    variant="contained" 
                    onClick={() => handleClick(true)}
                    className={classes.button}
                >Get Weather</Button>
            </Box>
            <Information data={data} city={city} country={country} />
        </>
    )
}

export default Form;