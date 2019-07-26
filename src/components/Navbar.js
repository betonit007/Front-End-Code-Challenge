import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/TypoGraphy';
import { Home, Book, AccountBox } from '@material-ui/icons'

const NavBar = props => {
    return (
        <List component='nav'>
            <ListItem component='div'>
                <ListItemText inset>
                    <TypoGraphy color='inherit' variant='h6'>
                       <Home/>
                    </TypoGraphy>
                </ListItemText>


                <ListItemText inset>
                    <TypoGraphy color='inherit' variant='h6'>
                         <Book/>
                    </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                    <TypoGraphy color='inherit' variant='h6'>
                         <AccountBox />
                    </TypoGraphy>
                </ListItemText>
            </ListItem>
        </List>
    )
}

export default NavBar;