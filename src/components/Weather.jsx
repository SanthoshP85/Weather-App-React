import { makeStyles, Box, Typography } from '@material-ui/core';

import Form from './Form';

import "./weather.css"

const Weather = () => {
   
    return (
        <Box className="component">
            
            
            <Box className="rightContainer">
                <Form />
            </Box>
        </Box>
    )
}

export default Weather;