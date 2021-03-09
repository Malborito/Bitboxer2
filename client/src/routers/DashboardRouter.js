import React from 'react'
import HomeScreen from '../components/HomeScreen';
import AppBarComponent from '../components/ui/AppBarComponent';
import { UsersScreen } from '../components/users/UsersScreen';

import { Switch, Route, Redirect } from "react-router-dom";
import ItemsScreen from '../components/items/ItemsScreen';

export const DashboardRouter = () => {

    return (
        <>
            <AppBarComponent />
            <div>
                <Switch>
                    <Route exact path='/home' component={ ItemsScreen } />
                    <Route exact path='/users' component= {UsersScreen} />

                    <Redirect to='/home' />
                </Switch>
            </div>
        </>
      );
}
