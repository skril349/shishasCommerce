import React, { useState } from "react";
import Layout from "../layout/Layout";
import LoginForm from "../components/Auth/LoginForm";
export default function CreateHookah() {
  const [auth, setAuth] = useState(false);
  return (
    <Layout>
      {!auth ? (
        <LoginForm />
      ) : (
        <div className="create-hookah">
          <div className="column1">Info</div>
          <div className="column2">Info</div>
        </div>
      )}
    </Layout>
  );
}
