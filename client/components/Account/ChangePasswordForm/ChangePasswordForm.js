import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-toastify";
import { updatePasswordApi } from "../../../api/user";
import useAuth from "../../../hooks/useAuth";

export default function ChangePasswordForm(props) {
  const { user, setReloadUser } = props;
  const { logout } = useAuth();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      const response = await updatePasswordApi(
        user.id,
        formData.password,
        logout
      );
      console.log(response);

      if (!response) {
        toast.error("Error al actualizar");
        setLoading(false);
      } else {
        console.log("contraseña actualizado");
        setLoading(false);
        setReloadUser(true);
      }
    },
  });

  return (
    <div className="change-password-form">
      <h4>Cambia tu contraseña</h4>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            name="password"
            placeholder="Tu nueva contraseña"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.errors.password}
          />

          <Form.Input
            name="repeatPassword"
            placeholder="confirma tu contraseña"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.repeatPassword}
            error={formik.errors.repeatPassword}
          />
        </Form.Group>
        <Button type="sumbit" loading={loading}>
          Actualizar
        </Button>
      </Form>
    </div>
  );
}

function initialValues() {
  return {
    email: "",
    repeatEmail: "",
  };
}

function validationSchema() {
  return {
    password: Yup.string()
      .required(true)
      .oneOf([Yup.ref("repeatPassword")], true),
    repeatPassword: Yup.string()
      .required(true)
      .oneOf([Yup.ref("password")], true),
  };
}
