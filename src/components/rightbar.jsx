
import { Container } from '@mui/material';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme)=> ({
  container : {
    paddingTop : theme.spacing(10)
},
}))



function RightBar(){

    const classes = useStyles();

    return(
      <Container className= {classes.container}>
            Right side
      </Container>
    )
  }
  export default RightBar;