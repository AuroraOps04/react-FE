import React from 'react';
import {globalRouter} from "./router";
import {Redirect, Route, Switch} from "react-router-dom";
import {useSelector} from "react-redux";
import FancyRoute from "@components/FancyRoute";

function App(props) {
    const {isLogin} = useSelector(state => state.user)
    return (
        <Switch>
            {globalRouter.map(route => {
                const Component = route.component
                if(route.name !== "Layout"){
                    return (<FancyRoute key={route.path} path={route.path} render={ routeType => <Component {...routeType}  />} />)
                }else{
                    return (<Route key={route.path} path={route.path} render={ routeType => <Component {...routeType}  />} />)
                }
            })}
            { !isLogin ? <Redirect to="/login" /> : <Redirect to="/admin" />}
            <Redirect to='/404' />
        </Switch>
    );
}

export default App;
