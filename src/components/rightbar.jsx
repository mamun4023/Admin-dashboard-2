
import { Avatar, AvatarGroup, Container, Typography, ImageList, ImageListItem } from '@mui/material';
import {makeStyles} from '@mui/styles';
import Pic1 from '../static/profle_pic/pic_1.jpg';
import Pic2 from '../static/profle_pic/pic_2.jpg';
import Pic3 from '../static/profle_pic/pic_3.jpg';
import Pic4 from '../static/profle_pic/pic_4.jpg';
import Pic5 from '../static/profle_pic/pic_5.jpg';

const useStyles = makeStyles((theme)=> ({
  container : {
    paddingTop : theme.spacing(10)
},
}))



function RightBar(){

    const classes = useStyles();

    return(
      <Container className= {classes.container}>
            <Typography> Online Frineds </Typography>
            <AvatarGroup max={6} >
              <Avatar src= {Pic1} />
              <Avatar src= {Pic2} />
              <Avatar src= {Pic3} />
              <Avatar src= "" />
              <Avatar src= {Pic4} />
              <Avatar src= {Pic4} />
              <Avatar src= {Pic5} />
            </AvatarGroup>

            <Typography> Gallery</Typography>

            <ImageList  className = {classes.ImageList} cols = {3} >
            
                <ImageListItem>
                  <img src = {Pic1} />
                  <img src = {Pic2} />
                  <img src = {Pic3} />
                  <img src = {Pic4} />
                  <img src = {Pic5} />
                  <img src = "" />
                </ImageListItem>
         
          </ImageList>
      </Container>
    )
  }
  export default RightBar;