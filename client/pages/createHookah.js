import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import LoginForm from "../components/Auth/LoginForm";
import useAuth from "../hooks/useAuth";
import { Image } from "semantic-ui-react";
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
            <Image src="/shisha.png" fluid />
          </div>
          <div className="column2">HEY</div>
          <div className="column3">HEY</div>
        </div>
      )}
    </Layout>
  );
}
