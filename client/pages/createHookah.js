import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import LoginForm from "../components/Auth/LoginForm";
import useAuth from "../hooks/useAuth";
import { Image } from "semantic-ui-react";
import SishaImages from "../components/CreateHookah/ShishaImages";

export default function CreateHookah() {
  const { auth } = useAuth();
  if (auth === undefined) return null;
  return (
    <Layout>
      {!auth ? (
        <LoginForm />
      ) : (
        <div className="create-hookah">
          <div className="column1">
            <SishaImages />
          </div>
          <div className="column2">HEY</div>
          <div className="column3">HEY</div>
        </div>
      )}
    </Layout>
  );
}
