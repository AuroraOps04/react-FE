import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {adminRouter} from "../router";

function Layout(props) {
    return (
        <div>
            <Switch>
                {adminRouter.map(route => {
                    const Component = route.component
                    return (
                        <Route key={route.path} path={route.path}>
                            <Component />
                        </Route>
                    )
                })}
                <Redirect from="/admin" exact to="/admin/dashboard" />
                <Redirect to="/404" />
            </Switch>
        </div>
    );
}

export default Layout;
