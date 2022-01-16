import { Box, makeStyles, Typography } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import OpacityIcon from '@material-ui/icons/Opacity';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloudIcon from '@material-ui/icons/Cloud';

import "./information.css"

const Information = ({ data, city, country }) => {
 

    const getCloudsData = (value) => {
        if(value === 0){
            return 'Clear';
        }else if(value > 1 && value < 100){
            return 'Partially Cloudy';
        }else{
            return 'Cloudy';
        }
    }

    return (
        data && city && country ?
            <div className="headbox">
            <Box className="infocomponent">
                <Typography className="row"><LocationOnIcon className="icon"/>Location:  <Box className="value" component="span">{data.name}, {data.sys.country} </Box></Typography>
                <Typography className="row"><SettingsBrightnessIcon className="icon" />Temperature:  <Box className="value" component="span">{data.main.temp}°C </Box></Typography>
                <Typography className="row"><OpacityIcon className="icon" />Humidity:  <Box className="value" component="span">{data.main.humidity}% </Box></Typography>
                <Typography className="row"><Brightness5Icon className="icon" />Sun Rise:  <Box className="value" component="span">{new Date(data.sys.sunrise * 1000).toLocaleTimeString()} </Box></Typography>
                <Typography className="row"><Brightness6Icon className="icon" />Sun Set: <Box className="value" component="span">{new Date(data.sys.sunset * 1000).toLocaleTimeString()} </Box></Typography> 
                {/* <Typography className="row"><DehazeIcon className="icon" />Condition:  <Box className="value" component="span">{data.weather[0].main} </Box></Typography> */}
                <Typography className="row"><CloudIcon className="icon" />Clouds:  <Box className="value" component="span">{getCloudsData(data.clouds.all)} </Box></Typography>
            </Box>
            </div>
        : !(city && country) ? <Typography className="error">Please Enter the values to check Weather</Typography> : ''
    )
}

export default Information;