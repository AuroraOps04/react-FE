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
                            <SubMenu key={route.path} icon={<route.icon />} title={route.name}>
                                {
                                    route.children.map(childRoute => <Item key={childRoute.path} icon={<childRoute.icon />}>
                                        {childRoute.name}
                                    </Item>)
                                }
                            </SubMenu>
                        )
                    } else {
                        return <Item key={route.path} icon={<route.icon />}>
                            {route.name}
                        </Item>
                    }
                })}
            </Menu>
        </div>
    );
}

export default withRouter(Aside);
