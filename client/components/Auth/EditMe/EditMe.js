import React, { useState } from "react";
import Layout from "../../../layout/Layout";
import ChangeNameForm from "../../Account/ChangeNameForm";
import ChangeEmailForm from "../../Account/ChangeEmailForm/ChangeEmailForm";
export default function EditMe(props) {
  const { user, setReloadUser } = props;
  return (
    <Layout>
      <div fluid className="edit-me">
        <Configuration user={user} setReloadUser={setReloadUser} />
      </div>
    </Layout>
  );
}

function Configuration(props) {
  const { user, setReloadUser } = props;
  if (!user) return null;
  return (
    <div className="edit-me__configuration">
      <div className="title">Configuración:</div>
      <div className="data">
        <ChangeNameForm user={user} setReloadUser={setReloadUser} />
        <ChangeEmailForm user={user} setReloadUser={setReloadUser} />
      </div>
    </div>
  );
}
