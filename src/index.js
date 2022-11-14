import  ReactDOM  from "react-dom";
import App from './App';
import { ThemeProvider} from '@mui/material';

import {Theme} from './theme';

ReactDOM.render(

    <ThemeProvider theme={Theme}> 

        <App/>
 </ThemeProvider>
, document.getElementById('root'))