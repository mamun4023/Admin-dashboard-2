import {Container} from '@mui/material';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme)=>({
  container : {
    paddingTop : theme.spacing(10)
},
}))

function Feed(){

  const classes = useStyles();
    return(
      <Container className = {classes.container}>
        From Feed section 
  
      
      </Container>
    )
  }
  
  export default Feed;