import React from 'react';
import {Menu} from 'antd';
import {withRouter} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

import {adminRouter} from "@/router";
import {setDefaultOpenKeys, setDefaultSelectedKeys} from "@store/features/asideSlice";

import "./index.less";

const {SubMenu, Item} = Menu;

function Aside(props) {
    const dispatch = useDispatch()
    const handleClick = ({key, keyPath}) => {
        dispatch(setDefaultOpenKeys([keyPath[1]])) // 将SubMenu的Key放入store
        dispatch(setDefaultSelectedKeys([key]))
        props.history.push(key)
    }
    const { opened, defaultSelectedKeys, defaultOpenKeys } = useSelector(state => state.aside)
    return (
        <div className={[
            'aside-wrapper',
            opened ? 'opened' : 'closed'
        ].join(" ")}  >
            <Menu
                theme='dark'
                onClick={handleClick}
                defaultSelectedKeys={defaultSelectedKeys}
                defaultOpenKeys={defaultOpenKeys}
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
