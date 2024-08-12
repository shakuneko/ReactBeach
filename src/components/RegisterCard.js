import { Button, Form, Input, InputNumber, Checkbox } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import { useRegisterWithEmailPassword } from "../react-query";
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import Cookie from "js-cookie"
import React, { useEffect } from "react";

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */
  
  const RegisterCard = ({redirect}) => {
    const { mutate, error, isLoading, isError, isSuccess, data } = useRegisterWithEmailPassword();

    const navigate = useNavigate();
    const onFinish = (values) => {
      console.log(values);
      mutate(values);
    };

    useEffect(() => {
      if (isSuccess) {
        Cookie.set("userInfo", JSON.stringify(data?.data));
        navigate(redirect);
      }
    }, [isSuccess, redirect]); 

    const checkoutHandler = () => {
        navigate("/auth/login?redirect=account");
      };
    
    return (
    <div  className="main-container l-content-center" >

    <div className='login_out-title'>註冊</div>
      <Form 
      {...layout} 
        name="normal_login" 
        onFinish={onFinish} 
        // validateMessages={validateMessages}
    >
    <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "請輸入您的暱稱!",
          },
        ]}
      >
        <Input 
            size='large'
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="名稱"
        />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            message: "信箱",
          },
          {
            required: true,
            message: "請輸入您的信箱!",
          },
        ]}
        hasFeedback
      >
        <Input
        　size='large'
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="信箱"
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
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "請再次輸入您的密碼!",
          },
        ]}
        hasFeedback
      >
        <Input.Password
        　size='large'
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="確認密碼"
        />
      </Form.Item>
      <Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            className="login-form__button"
            size='large'
            // loading
          >
            註冊
          </Button>


      </Form.Item>
     
      <Form.Item>

      
        <Button
        type="primary"
        htmlType="submit"
        className="register-form__button"
        size='large'
        // loading
        >
       

        <Link to={`/auth/login?redirect=${redirect}`}
      >登入</Link>
        </Button>
   


        


        </Form.Item>
      </Form>
      {/*<Button
            className="register-form__button"
            type="primary"
            onClick={checkoutHandler}
         >
            <span style={{ marginLeft: 12 }}>Start Checkout</span>
      </Button>
      */}

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
  export default RegisterCard;