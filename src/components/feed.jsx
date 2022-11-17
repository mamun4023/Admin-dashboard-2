import {makeStyles} from '@mui/styles';
import {Container} from '@mui/material';
import Post from './post';

const useStyles = makeStyles((theme)=> ({
    container : {
        paddingTop : theme.spacing(10)
    }
}))


function Feed(){
    
    const classes = useStyles();

    return(
        <Container className= {classes.container}>
        
          <Post />
          <Post />
          <Post /><Post />
        </Container>
    )
}

export default Feed;