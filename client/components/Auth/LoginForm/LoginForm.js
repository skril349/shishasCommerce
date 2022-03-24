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

export default function LoginForm() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const changeForm = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const login = async (e) => {
    const result = await signInApi(inputs);
    console.log(result);
    if (result.message) {
      notification["error"]({
        message: result.message,
      });
    } else {
      const { accessToken, refreshToken } = result;
      localStorage.setItem(ACCESS_TOKEN, accessToken);
      localStorage.setItem(REFRESH_TOKEN, refreshToken);
      notification["success"]({
        message: "login Correcto",
      });
      window.location.href = "/admin";
    }
  };
  return (
    <Form className="login-form" onChange={changeForm}>
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
          onChange={changeForm}
        />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          className="login-form__button"
          onClick={login}
        >
          Entrar
        </Button>
      </Form.Item>
    </Form>
  );
}
