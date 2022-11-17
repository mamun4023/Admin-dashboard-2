import {Container, Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';
import { Home, Person, FormatListBulleted,CameraAlt,Slideshow, PhoneAndroid, PlaylistAddCircle,Store, Settings,Logout } from '@mui/icons-material';



const useStyles = makeStyles((theme)=>({
    container : {
        height : '100vh',
        color : 'white',
        paddingTop : theme.spacing(10),
        position : 'sticky',
        top : 0,
        backgroundColor : theme.palette.primary.main,
        [theme.breakpoints.up('sm')] : {
            backgroundColor: 'white',
            color : "#555",
            border : '1px solid #ece7e7'
        }
    },
    item : {
        display : 'flex',
        alignItems : 'center',
        marginBottom : theme.spacing(4),
        [theme.breakpoints.up('sm')] : {
            marginBottom : theme.spacing(3),
            cursor : "pointer"
        }
    },
    icon : {
        marginRight : theme.spacing(1),
        [theme.breakpoints.up('sm')] : {
            fontSize : "15px"
        }
    },
    text : {
        fontWeight : 500,
        [theme.breakpoints.down('sm')] : {
            display : "none"
        }
    }

}))

function LeftBar(){

  const classes = useStyles();


    return(
        <Container className= {classes.container}>
            <div className= {classes.item} >
                <Home  className = {classes.icon }/>
                <Typography className= {classes.text}> Home page </Typography>
            </div>
            <div className= {classes.item} >
                <Person  className = {classes.icon }/>
                <Typography className= {classes.text}> Friends </Typography>
            </div>
            <div className= {classes.item} >
                <FormatListBulleted  className = {classes.icon }/>
                <Typography className= {classes.text}> List </Typography>
            </div>
            <div className= {classes.item} >
                <CameraAlt  className = {classes.icon }/>
                <Typography className= {classes.text}> Camera </Typography>
            </div>
            <div className= {classes.item} >
                <Slideshow  className = {classes.icon }/>
                <Typography className= {classes.text}> Videos </Typography>
            </div> 

            <div className= {classes.item} >
                <PhoneAndroid  className = {classes.icon }/>
                <Typography className= {classes.text}> Phone </Typography>
            </div>
            <div className= {classes.item} >
                <PlaylistAddCircle  className = {classes.icon }/>
                <Typography className= {classes.text}> Collection </Typography>
            </div>  
            <div className= {classes.item} >
                <Store  className = {classes.icon }/>
                <Typography className= {classes.text}> Market Place </Typography>
            </div>  
            <div className= {classes.item} >
                <Settings  className = {classes.icon }/>
                <Typography className= {classes.text}> Settings </Typography>
            </div>  
       
            <div className= {classes.item} >
                <Logout  className = {classes.icon }/>
                <Typography className= {classes.text}> Logout </Typography>
            </div>  


        </Container>
    )
  }
  
  export default LeftBar;