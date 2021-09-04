import React from 'react';
import {useDispatch} from "react-redux";
import {Form, Input, Button, Checkbox, Card, message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {login} from "@store/features/userSlice";

import styles  from "./index.module.less"

function Login(props) {
    const dispatch = useDispatch()
    const onFinish = async (values) => {
        const res =  await dispatch(login(values))
        if(res.meta.requestStatus === 'rejected'){
            message.error("登录失败:")
        }else{
            props.history.push("/admin")
            message.success("登录成功")
        }
    };
    return (
        <div className={styles.LoginWrapper}>
            <Card className={styles.LoginBox} title="欢迎登录">
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={
                        {
                            remember: true
                        }
                    }
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="#!">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a href="#!">register now!</a>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}

export default Login;
