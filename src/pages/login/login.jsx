import React from 'react';
import './login.less'
import logo from './images/logo_dp.png'
import { Form, Input, Button } from 'antd';

/**
 * 登录的路由组件
 */

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20, 
  },
  labelAlign: 'left',
  colon: false,
  requiredMark: false
}

const Login = () => {

  const onFinish = (value) => {
    console.log(value)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const userNameRuleBlur = ({ getFieldValue }) => ({
    validator(_, value) {
      console.log(getFieldValue())
      if (!value) {
        return Promise.reject('请输入账号!')
      }
      if (value === 'admin') {
        return Promise.resolve()
      }
      if (value.length !== 11) {
        return Promise.reject('请输入正确的账号!')
      }
      return Promise.resolve();
    },
    validateTrigger: 'onBlur'
  })

  const passwordRule = ({ getFieldValue }) => ({
    validator(_, value) {
      console.log(getFieldValue())
      if (!value) {
        return Promise.reject('请输入密码!')
      }
      if (value.length < 6) {
        return Promise.reject('密码需大于或等于6位!')
      }
      return Promise.resolve();
    },
    validateTrigger: 'onBlur'
  })

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
            {...layout}
            name="form"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="login-form"
          >
            <Form.Item
              label="账号"
              name="username"
              validateTrigger={['onBlur', 'onChange']}
              rules={[userNameRuleBlur]}
              className="login-form-input"
            >
              <Input size="large"/>
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              validateTrigger={'onBlur'}
              rules={[passwordRule]}
              className="login-form-input"
            >
              <Input size="large" type="password"/>
            </Form.Item>

            <Form.Item labelCol={{span: 0}} wrapperCol={{span: 24}}>
              <Button type="primary" htmlType="submit" block size="large">
                登录
              </Button>
            </Form.Item>
          </Form>
          <div className="login-regist">
            登录即代表你同意
            <a target="_blank" rel="noreferrer" href="http://ceshi-file-oss.oss-cn-hangzhou.aliyuncs.com/legalNotices/privacyPolicy.html">《用户使用协议》</a>
          </div>
        </section>
      </div>
    </div>
  )
}
export default Login