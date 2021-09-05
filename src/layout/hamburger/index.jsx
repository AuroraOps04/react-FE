import React from 'react';
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import "./index.less";
import {useDispatch, useSelector} from "react-redux";
import {toggleOpened} from "@store/features/asideSlice";


function Hamburger(props) {
    const {opened} = useSelector(state => state.aside)
    const dispatch = useDispatch()
    const toggleAside = () => {
        dispatch(toggleOpened(!opened))
    }

    return (
        <div className="hamburger" onClick={toggleAside}>
            {
                !opened ? <MenuFoldOutlined style={
                    {fontSize: '24px'}
                }/> : <MenuUnfoldOutlined style={
                    {fontSize: '24px'}
                }/>
            }

        </div>
    );
}

export default Hamburger;
