import React, { useState } from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Layout from "../../../layout/Layout/Layout";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "semantic-ui-react";
import { loginApi } from "../../../api/user";
import useAuth from "../../../hooks/useAuth";

export default function LoginForm() {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      const response = await loginApi(formData);
      if (response?.jwt) {
        login(response.jwt);
      } else {
        console.log("error");
      }
      setLoading(false);
    },
  });
  return (
    <Layout>
      <div className="login-form-div">
        <div className="login-form-space">
          <Form className="login-form" onSubmit={formik.handleSubmit}>
            <Form.Input
              name="identifier"
              type="text"
              placeholder="email"
              onChange={formik.handleChange}
              error={formik.errors.identifier}
            />
            <Form.Input
              name="password"
              type="password"
              placeholder="contraseña"
              onChange={formik.handleChange}
              error={formik.errors.password}
            />
            <Button
              loading={loading}
              type="submit"
              className="login-form__button"
              //   onClick={login}
            >
              Login
            </Button>
            <Link href="/register">
              <a>Register</a>
            </Link>
          </Form>
        </div>
      </div>
    </Layout>
  );
}

function initialValues() {
  return {
    identifier: "",
    password: "",
  };
}
function validationSchema() {
  return {
    identifier: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
  };
}
