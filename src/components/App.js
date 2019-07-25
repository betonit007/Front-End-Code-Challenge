import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/TypoGraphy';
import NavBar from '../components/Navbar';

const App = () => {
    return (
        <div>
           <AppBar color='primary' position='static'>
               <Toolbar>
                   <TypoGraphy variant='h6'
                        color='inherit'
                        >
                        Social Media Awesomeness!
                    </TypoGraphy>
                    <NavBar />
                    
                </Toolbar>
           </AppBar>
           
        </div>
    )
}

export default App;