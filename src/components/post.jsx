import {
    Button,
    Card, CardActionArea, CardContent, CardMedia, Typography,
} from '@mui/material';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme)=> ({
    card : {
        marginBottom : theme.spacing(5)
    },
    media : {
        height : 250,
        [theme.breakpoints.down('sm')] : {
            height : 150
        }
    }
}));

const Post = ()=>{

    const classes = useStyles();

    return(
        <Card className= {classes.card}>
            <CardActionArea>
                <CardMedia
                    className= {classes.media}
                    image = "https://thumbs.dreamstime.com/b/healthy-food-selection-healthy-food-selection-fruits-vegetables-seeds-superfood-cereals-gray-background-121936825.jpg"
                    
                 />

                 <CardContent>
                    <Typography gutterBottom variant='h5' > MY First Post </Typography>
                    <Typography variant='body2'>
                        first fosfsfdfdfdfdfdfdf first fosfsfdfdfdfdfdfdf first fosfsfdfdfdfdfdfdf
                    </Typography> 
                 </CardContent>
                 <Button size = "small" color='primary' > Share </Button>
                 <Button size = "smalll" color='primary' > learn more </Button>
            </CardActionArea>     
        </Card>
    )
}

export default Post;