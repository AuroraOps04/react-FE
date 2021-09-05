import React from 'react';
import styles from "./index.module.less"
import AnimatedRouter from "react-animated-router";
import {adminRouter} from "@/router";
import FancyRoute from "@components/FancyRoute";
import {Redirect} from "react-router-dom";
function AppMain(props) {
    return (
        <div className={styles.AppMain} >
            <AnimatedRouter component={null}>
                {adminRouter.map(route => {
                    const routes = route.children
                    return (
                        routes ? routes.map(childRoute =>
                            (
                                <FancyRoute key={childRoute.path} path={childRoute.path}>
                                    <childRoute.component  />
                                </FancyRoute>
                            )
                        ) : <FancyRoute key={route.path} path={route.path}>
                            <route.component />
                        </FancyRoute>

                    )
                })}
                <Redirect from="/admin" exact to="/admin/dashboard"/>
                <Redirect to="/404"/>
            </AnimatedRouter>
        </div>
    );
}

export default AppMain;
