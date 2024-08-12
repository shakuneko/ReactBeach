import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, Checkbox } from 'antd';
import { WarningOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import Cookie from "js-cookie"

import { remember } from "../redux/usersSlice";
import { useSignInWithEmailPassword } from "../react-query";
import { selectIsRemember } from "../redux/usersSlice";

const layout = {
  labelCol: {
    span: 8,
  },

};

/* eslint-enable no-template-curly-in-string */
const LoginCard = ({ redirect }) => {
  const { mutate, error, isLoading, isError, isSuccess, data } = useSignInWithEmailPassword();
  const isRemember = useSelector(selectIsRemember);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    mutate(values);
  };

  const onChange = (e) => {
    dispatch(remember(e.target.checked));
  };

  useEffect(() => {
    if (isSuccess) {
      Cookie.set("userInfo", JSON.stringify(data.data));
      navigate(redirect);
    }
  }, [isSuccess, redirect]);

  const checkoutHandler = () => {
    navigate("/auth/account");
  };


  return (
    <div className="main-container l-content-center" >
      <div className='login_out-title'>登入</div>

      <Form {...layout}
        name="normal_login"
        form={form}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "使用者電子郵件",
            },
            {
              required: true,
              message: "請輸入您的Email!",
            },
          ]}
          hasFeedback
        >
          <Input
            size='large'
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="名稱"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "請輸入您的密碼!",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            size='large'
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="密碼"
          />
        </Form.Item>
        <Form.Item className='login_out-form-between'>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox onChange={onChange} checked={isRemember} className='login-form__forgot_remember'>
              記住密碼
            </Checkbox>
          </Form.Item>
          

          <Link className="login-form__forgot_remember" to={"/"}>
            忘記密碼
          </Link>

        </Form.Item>
        <Form.Item>
        {isLoading ? (
          <Button
            type="primary"
            htmlType="submit"
            className="login-form__button"
            size='large'
            loading
          >
            登入
          </Button>
           ) : (
            <Button
            type="primary"
            htmlType="submit"
            className="login-form__button"
            size='large'
            
          >
            登入
          </Button>
           )}
          { !isError ? (
          <></>
        ) : (
          <div className="login-form__error-wrap">
            <h3 className="login-form__error-title">
              <WarningOutlined className="site-form-item-icon" />
              {"  "}There was a problem
            </h3>
            <p className="login-form__error-message">{error.response.data.detail}</p>
          </div>
        )}


        </Form.Item>
        <Link to={`/auth/register?redirect=account`}
        className="login-form__forgot_remember">還沒有帳號嗎？現在就註冊吧!</Link>
      </Form>
      <div >
        <div className='other-login-ways-box '>
          <div className='login_out-line'></div>
          <div className='login-form__forgot_remember'>or</div>
          <div className='login_out-line'></div>
        </div>

        <div
          className="other-login-ways-icons"
        >
          <div className="other-login-ways-icon other-login-fb"></div>
          <div className="other-login-ways-icon other-login-google"></div>
          <div className="other-login-ways-icon other-login-twit"></div>
        </div>
      </div>
    </div>
  );
};
export default LoginCard;