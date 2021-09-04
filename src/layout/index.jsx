import React, {Fragment} from 'react';
import {Redirect, Switch} from "react-router-dom";
import {adminRouter} from "@/router";
import FancyRoute from "@components/FancyRoute";
import Aside from "@/layout/Aside";
import styles from "./index.module.less"

function Layout(props) {
    return (
        <Fragment>
            <Aside/>
            <div className={styles.AppMain}>
                <Switch>
                    {adminRouter.map(route => {
                        const routes = route.children
                        return (
                            routes ? routes.map(childRoute =>
                                (
                                    <FancyRoute key={childRoute.path} path={childRoute.path}>
                                        <childRoute.component/>
                                    </FancyRoute>
                                )
                            ) : <FancyRoute key={route.path} path={route.path}>
                                <route.component/>
                            </FancyRoute>

                        )
                    })}
                    <Redirect from="/admin" exact to="/admin/dashboard"/>
                    <Redirect to="/404"/>
                </Switch>
            </div>
        </Fragment>
    );
}

export default Layout;
