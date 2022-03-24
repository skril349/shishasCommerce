// import React from "react";
// import Layout from "../../../layout/Layout";
// export default function LoginForm() {
//   return (
//     <Layout>
//       <div className="login-form">
//         <h1 className="text">LoginForm</h1>
//       </div>
//     </Layout>
//   );
// }

import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import Layout from "../../../layout/Layout/Layout";
import Link from "next/link";
export default function RegisterForm() {
  const changeForm = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      <div className="register-form-div">
        <div className="register-form-space">
          <Form
            className="register-form"
            // onChange={changeForm}
          >
            <Form.Item>
              <Input
                size="large"
                prefix={
                  <UserOutlined
                    style={{ color: "rgba(0, 0, 0, 0.25)", fontSize: "200%" }}
                  />
                }
                type="user"
                name="user"
                placeholder="Name"
                className="register-form__input"
              />
            </Form.Item>
            <Form.Item>
              <Input
                size="large"
                prefix={
                  <UserOutlined
                    style={{ color: "rgba(0, 0, 0, 0.25)", fontSize: "200%" }}
                  />
                }
                type="lastname"
                name="lastname"
                placeholder="Lastname"
                className="register-form__input"
              />
            </Form.Item>
            <Form.Item>
              <Input
                size="large"
                prefix={
                  <UserOutlined
                    style={{ color: "rgba(0, 0, 0, 0.25)", fontSize: "200%" }}
                  />
                }
                type="Username"
                name="Username"
                placeholder="Username"
                className="register-form__input"
              />
            </Form.Item>
            <Form.Item>
              <Input
                size="large"
                prefix={
                  <MailOutlined
                    style={{ color: "rgba(0, 0, 0, 0.25)", fontSize: "200%" }}
                  />
                }
                type="email"
                name="email"
                placeholder="email"
                className="register-form__input"
              />
            </Form.Item>

            <Form.Item>
              <Input
                size="large"
                prefix={
                  <LockOutlined
                    style={{ color: "rgba(0, 0, 0, 0.25)", fontSize: "200%" }}
                  />
                }
                type="password"
                name="password"
                placeholder="password"
                className="register-form__input"
                //   onChange={changeForm}
              />
            </Form.Item>
            <Form.Item>
              <Input
                size="large"
                prefix={
                  <LockOutlined
                    style={{ color: "rgba(0, 0, 0, 0.25)", fontSize: "200%" }}
                  />
                }
                type="repeatPassword"
                name="repeatPassword"
                placeholder="Repeat Password"
                className="register-form__input"
                //   onChange={changeForm}
              />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                className="register-form__button"
                //   onClick={register}
              >
                Registrarse
              </Button>
            </Form.Item>
            <Form.Item className="register-form__register">
              <Link href="register">
                <a>Login</a>
              </Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Layout>
  );
}
