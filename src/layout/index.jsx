import React, {Fragment} from 'react';
import {Redirect, Switch} from "react-router-dom";
import {adminRouter} from "@/router";
import FancyRoute from "@components/FancyRoute";
import Aside from "@/layout/Aside";
import styles from "./index.module.less"

function Layout(props) {
    return (
        <Fragment>
            <Aside />
            <div className={styles.AppMain}>
                <Switch>
                    {adminRouter.map(route => {
                        const Component = route.component
                        return (
                            <FancyRoute key={route.path} path={route.path}>
                                <Component />
                            </FancyRoute>
                        )
                    })}
                    <Redirect from="/admin" exact to="/admin/dashboard" />
                    <Redirect to="/404" />
                </Switch>
            </div>
        </Fragment>
    );
}

export default Layout;
