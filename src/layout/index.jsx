import React, {Fragment} from 'react';
import Aside from "@/layout/Aside";
import  "./index.less"
import NayBar from "@/layout/NavBar";
import AppMain from "@/layout/AppMain";
import {useSelector} from "react-redux";


function Layout(props) {
    const {opened} = useSelector(state => state.aside)
    return (
        <Fragment>
            <Aside />
                <div className={['app-wrapper', opened ? "opened" : "closed"].join(" ")} >
                    <NayBar />
                   <AppMain />

                </div>

        </Fragment>
    );
}

export default Layout;
