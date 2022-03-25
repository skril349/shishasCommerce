import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import LoginForm from "../components/Auth/LoginForm";
import useAuth from "../hooks/useAuth";
export default function CreateHookah() {
  const { auth } = useAuth();

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
