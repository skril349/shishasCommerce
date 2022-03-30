import React, { useState, useEffect } from "react";
import CartPage from "../components/Auth/Cart";
import Edit from "../components/Auth/EditMe";
import { useRouter } from "next/router";
import useAuth from "../hooks/useAuth";
import { getMeApi } from "../api/user";

export default function EditMe() {
  const router = useRouter();
  const { auth, logout, setReloadUser } = useAuth();

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    (async () => {
      const response = await getMeApi(logout);
      console.log(response);
      setUser(response || null);
    })();
  }, [auth]);

  if (user === undefined) return null;
  if (!auth && !user) {
    router.replace("/");
    return null;
  }
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Edit user={user} setReloadUser={setReloadUser} />
    </div>
  );
}
