import {Container, Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';
import { Home } from '@mui/icons-material';

const useStyles = makeStyles((theme)=>({
    container : {
        paddingTop : theme.spacing(10)
    },
    item : {
        display : 'flex',
        alignItems : 'center',
        marginBottom : theme.spacing(1),
        [theme.breakpoints.up('sm')] : {
            marginBottom : theme.spacing(1)
        }
    }

}))

function LeftBar(){

  const classes = useStyles();


    return(
        <Container className= {classes.container}>
            <div className= {classes.item} >
                <Home  className = {classes.item }/>
                <Typography className= {classes.text}> Home page </Typography>
            </div>
            <div className= {classes.item} >
                <Home  className = {classes.item }/>
                <Typography className= {classes.text}> Home page </Typography>
            </div>
            <div className= {classes.item} >
                <Home  className = {classes.item }/>
                <Typography className= {classes.text}> Home page </Typography>
            </div>
            <div className= {classes.item} >
                <Home  className = {classes.item }/>
                <Typography className= {classes.text}> Home page </Typography>
            </div>
            <div className= {classes.item} >
                <Home  className = {classes.item }/>
                <Typography className= {classes.text}> Home page </Typography>
            </div> 
    
        
        </Container>
    )
  }
  
  export default LeftBar;