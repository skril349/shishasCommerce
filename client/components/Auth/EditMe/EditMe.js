import React, { useState } from "react";
import Layout from "../../../layout/Layout";
import ChangeNameForm from "../../Account/ChangeNameForm";
export default function EditMe(props) {
  const { user } = props;
  return (
    <Layout>
      <div fluid className="edit-me">
        <Configuration user={user} />
      </div>
    </Layout>
  );
}

function Configuration(props) {
  const { user } = props;
  if (!user) return null;
  return (
    <div className="edit-me__configuration">
      <div className="title">Configuración:</div>
      <div className="data">
        <ChangeNameForm user={user} />
      </div>
    </div>
  );
}
