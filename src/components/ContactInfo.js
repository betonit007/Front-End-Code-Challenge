import React from 'react';
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Person } from '@material-ui/icons'

import placeHolder from '../components/apis/placeHolder';

class ContactInfo extends React.Component {

    state = {
        userInfo: []
    }

    async componentDidMount() {

        const res = await placeHolder.get(`users/${this.props.userId}`)
        this.setState({ userInfo: res.data })
        console.log(this.state);
    }


    render() {
        const { name } = this.state.userInfo;
        return (
            <CardActions>
                <CardContent>
                    <Paper>
                        <Person style={{paddingTop:'.4em'}}/>
                        <Typography variant="subtitle1" component="span" style={{padding:'.3em'}}>
                            {name}
                        </Typography>
                    </Paper>
                </CardContent>
                <Button size="small" color="primary" href="https://www.yahoo.com">
                    Share
                  </Button>
                <Button size="small" color="primary">
                    Learn More
                  </Button>
            </CardActions>
        )
    }
}

export default ContactInfo;