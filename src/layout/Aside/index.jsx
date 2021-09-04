import React from 'react';
import {Menu} from 'antd';
import {withRouter} from "react-router-dom";

import styles from "./index.module.less";

import {adminRouter} from "@/router";

const {SubMenu, Item} = Menu;

function Aside(props) {
    const handleClick = ({key}) => {
        props.history.push(key)
    }
    return (
        <div className={styles.AsideWrapper} >
            <Menu
                theme='dark'
                onClick={handleClick}
                style={
                    {width: 200}
                }
                mode="inline"
            >
                {adminRouter.map(route => {
                    if (route.children) {
                        return (
                            <SubMenu key={route.path}>
                                {
                                    route.children.map(childRoute => <Item key={childRoute.path}>
                                        {childRoute.name}
                                    </Item>)
                                }
                            </SubMenu>
                        )
                    } else {
                        return <Item key={route.path}>
                            {route.name}
                        </Item>
                    }
                })}
            </Menu>
        </div>
    );
}

export default withRouter(Aside);
