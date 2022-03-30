import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-toastify";
import { updateEmailApi } from "../../../api/user";
import useAuth from "../../../hooks/useAuth";

export default function ChangeEmailForm(props) {
  const { user, setReloadUser } = props;
  const { logout } = useAuth();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: initialValues(user.email),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      const response = await updateEmailApi(user.id, formData.email, logout);
      console.log(response);

      if (!response) {
        toast.error("Error al actualizar");
        setLoading(false);
      } else {
        console.log("nombre actualizado");
        setLoading(false);
        setReloadUser(true);
      }
    },
  });

  return (
    <div className="change-email-form">
      <h4>
        Cambia tu email <span>(Tu email actual es: {user.email})</span>
      </h4>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            name="email"
            placeholder="Tu nuevo email"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.errors.email}
          />

          <Form.Input
            name="repeatEmail"
            placeholder="confirma tu email"
            onChange={formik.handleChange}
            value={formik.values.repeatEmail}
            error={formik.errors.repeatEmail}
          />
        </Form.Group>
        <Button type="sumbit" loading={loading}>
          Actualizar
        </Button>
      </Form>
    </div>
  );
}

function initialValues(email) {
  return {
    email: email || "",
    repeatEmail: email || "",
  };
}

function validationSchema() {
  return {
    email: Yup.string()
      .email(true)
      .required(true)
      .oneOf([Yup.ref("repeatEmail")], true),
    repeatEmail: Yup.string()
      .email(true)
      .required(true)
      .oneOf([Yup.ref("email")], true),
  };
}
