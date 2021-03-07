import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Button from '@material-ui/core/Button';
class TopMenu extends React.Component {
    render() {


        return (
            <div className="menu">
                <Button color="inherit">Login</Button>

                <BrowserRouter basename={'/'}>
                    <Switch>
                        {/* <Route exact path='/auth/login' component={Login} /> */}
                        {/* <Route path='/' component={Home} /> */}
                    </Switch>
                </BrowserRouter>
            </div >

        );
    }
}
export default TopMenu;
