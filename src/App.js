import { Container, Grid} from '@mui/material';
import Nabvar from './components/navbar';
import LeftBar from './components/leftbar';
import Feed from './components/feed';
import RightBar from './components/rightbar';
import {makeStyles} from '@mui/styles';
import Add from './components/add'

const useStyles = makeStyles((theme)=> ({
  right : {
    [theme.breakpoints.down('sm')] : {
      display : 'none'
    }
  }
}))



function App(){

const classes = useStyles()

  return(
    <div>
        <Nabvar/>

        <Grid container>
            <Grid item sm = {2} > 
              <LeftBar />
            </Grid>
            <Grid item sm = {7} > 
              <Feed />
            </Grid>
            <Grid item sm = {3} className = {classes.right} > 
               <RightBar />
            </Grid>
        </Grid>

        <Add/>
    </div>
  )
}
export default App;