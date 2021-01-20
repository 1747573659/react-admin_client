import React, { Component } from 'react';
import './login.less'
import logo from './images/logo_dp.png'
import { Form, Input, Button } from 'antd';

/**
 * 登录的路由组件
 */

export default class Login extends Component {

  layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 20,
    },
    labelAlign: 'left',
    colon: false
  }

  onFinish = (values) => {
    console.log('Success:', values);
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  render () {
    return (
      <div className="login">
        <div className="login-img"></div>
        <div className="login-content">
          <header className="login-content-header">
            <img src={logo} alt=""/>
            <h1>欢迎登陆渠道管理系统-React版本</h1>
          </header>
          <section className="login-content-section">
            <Form
              {...this.layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
              className="login-form"
            >
              <Form.Item
                label="账号"
                name="username"
                rules={[{message: '请输入账号!' }]}
                className="login-form-input"
              >
                <Input size="large"/>
              </Form.Item>

              <Form.Item
                label="密码"
                name="password"
                rules={[{message: '请输入密码!' }]}
                className="login-form-input"
              >
                <Input size="large"/>
              </Form.Item>

              <Form.Item labelCol={{span: 0}} wrapperCol={{span: 24}}>
                <Button type="primary" htmlType="submit" block size="large">
                  登录
                </Button>
              </Form.Item>
            </Form>
            <div className="login-regist">
              登录即代表你同意
              <a target="_blank" href="http://ceshi-file-oss.oss-cn-hangzhou.aliyuncs.com/legalNotices/privacyPolicy.html">《用户使用协议》</a>
            </div>
          </section>
        </div>
      </div>
    )
  }
}
