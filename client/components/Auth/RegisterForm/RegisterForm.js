import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Layout from "../../../layout/Layout/Layout";
import Link from "next/link";
import { registerApi } from "../../../api/user";

export default function RegisterForm(props) {
  const { showLoginForm } = props;
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      console.log(formData);
      await registerApi(formData);
    },
  });

  return (
    <Layout>
      <div className="register-form-div">
        <div className="register-form-space">
          <Form className="register-form" onSubmit={formik.handleSubmit}>
            <Form.Input
              name="name"
              type="text"
              className="register-form__input"
              placeholder="nombre"
              onChange={formik.handleChange}
              error={formik.errors.name}
            />
            <Form.Input
              name="lastname"
              type="text"
              placeholder="apellidos"
              onChange={formik.handleChange}
              error={formik.errors.lastname}
            />
            <Form.Input
              name="username"
              type="text"
              placeholder="Nombre de Usuario"
              onChange={formik.handleChange}
              error={formik.errors.username}
            />
            <Form.Input
              name="email"
              type="text"
              placeholder="Correo Electrónico"
              onChange={formik.handleChange}
              error={formik.errors.email}
            />
            <Form.Input
              name="password"
              type="password"
              placeholder="Contraseña"
              onChange={formik.handleChange}
              error={formik.errors.password}
            />
            <Form.Input
              name="repeatPassword"
              type="password"
              placeholder="Repetir contraseña"
              onChange={formik.handleChange}
              error={formik.errors.repeatPassword}
            />
            <Form.Input
              name="age"
              type="age"
              placeholder="Age"
              onChange={formik.handleChange}
              error={formik.errors.age}
            />
            <div className="actions">
              <Link href="/createHookah">
                <a>Login</a>
              </Link>
              <Button type="submit" className="submit" loading={loading}>
                registrar
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Layout>
  );
}

function initialValues() {
  return {
    name: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
    age: "",
  };
}
function validationSchema() {
  return {
    name: Yup.string().required(true),
    lastname: Yup.string().required(true),
    username: Yup.string().required(true),
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
    repeatPassword: Yup.string()
      .required(true)
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    age: Yup.number().required(true),
  };
}
