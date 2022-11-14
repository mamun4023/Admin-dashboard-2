import {AppBar, Toolbar, Typography, InputBase, alpha, Badge, Avatar} from '@mui/material';
import {makeStyles} from '@mui/styles';


import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';


const useStyles = makeStyles((theme)=> ({
    toolbar : {
        display :'flex',
        justifyContent : 'space-between'
    },
    logoLarge : {
        display : "none",
        [theme.breakpoints.up('sm')]:{
            display : "block",
        }
    },
    logoSmall : {
        display : "block",
        [theme.breakpoints.up('sm')]:{
            display : "none",
        }
    },
    searchbox : {
        display : 'flex',
        alignItems : 'center',
        backgroundColor : alpha(theme.palette.common.white, 0.15),
        '&:hover' : {
            backgroundColor : alpha(theme.palette.common.white, 0.25)
        },
        borderRadius : theme.shape.borderRadius,
        width : '30%'
    },
    input:{
        color : 'white',
        marginLeft: theme.spacing(1)
    },

    icon : {
        display : 'flex',
        alignItems : 'center',
    },
    badge : {
        marginRight : theme.spacing(2)
    }
    
}))


function Navbar(){
    const classes = useStyles();
    return(
        <>
            <AppBar>
                <Toolbar className= {classes.toolbar}>
                    <Typography variant='h6' className= {classes.logoLarge} >
                        Lava LG
                    </Typography>
                    <Typography variant='h6' className= {classes.logoSmall} >
                        Lava SM
                    </Typography>

                    <div className= {classes.searchbox} > 
                        <SearchIcon />
                        <InputBase 
                            placeholder='search...'
                        />
                    </div>
                    <div className= {classes.icon}> 
                    <Badge color="secondary" badgeContent={0} showZero className= {classes.badge}>
                        <MailIcon />
                    </Badge>
                    <Badge color="secondary" badgeContent={0} showZero className= {classes.badge}>
                        <NotificationsIcon />
                    </Badge>

                    <Avatar alt="Remy Sharp" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoSk1Dg9m4glozXzOVVS08uug6pEH7P4kRSmAO4gzY&s" size="sm" />

                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
  }
  
  export default Navbar;