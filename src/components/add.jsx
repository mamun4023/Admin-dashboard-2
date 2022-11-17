import {makeStyles} from '@mui/styles';
import {Container} from '@mui/material';
import {Fab, Tooltip} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';



const useStyles = makeStyles((theme)=> ({
   fab : {
    position : 'fixed',
    bottom : 10,
    right : 10,
   }
}))


function Feed(){
    
    const classes = useStyles();

    return(
        <Tooltip title = "Add" aria-level="add">
            <Fab color='secondary' className= {classes.fab}> 
                <AddIcon />
            </Fab>
        </Tooltip>
    )
}

export default Feed;