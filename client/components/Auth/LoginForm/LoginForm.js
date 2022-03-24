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
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Layout from "../../../layout/Layout/Layout";

export default function LoginForm() {
  const changeForm = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      <div className="login-form-div">
        <div className="login-form-space">
          <Form
            className="login-form"
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
                type="email"
                name="email"
                placeholder="correo electronico"
                className="login-form__input"
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
                placeholder="contraseña"
                className="login-form__input"
                //   onChange={changeForm}
              />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                className="login-form__button"
                //   onClick={login}
              >
                Entrar
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Layout>
  );
}
