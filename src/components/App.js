import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/TypoGraphy';
import NavBar from '../components/Navbar';
import Posts from '../components/Posts';

const App = () => {
    return (
        <div style={{maxWidth:'90%', margin:'0 auto'}}>
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
           <Posts />
        </div>
    )
}

export default App;