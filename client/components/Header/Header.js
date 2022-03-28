import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Container,
  Menu as SemanticMenu,
  Grid,
  Icon,
  Label,
  Button,
} from "semantic-ui-react";
import useAuth from "../../hooks/useAuth";
import { getMeApi } from "../../api/user";

export default function Header() {
  const { logout, auth } = useAuth();
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setUser(undefined);
    (async () => {
      const response = await getMeApi(logout);
      setUser(response);
    })();
  }, [auth]);

  if (user === undefined) return null;
  return (
    // <SemanticMenu className="header">
    //   {/* <TopBar /> */}
    //   <Link href="/orders">
    //     <SemanticMenu.Item as="a">
    //       <Icon name="game" /> About Us
    //     </SemanticMenu.Item>
    //   </Link>
    // </SemanticMenu>
    <div className="header">
      <Container className="header__right">
        <Menu logout={logout} auth={auth} user={user} />
      </Container>
    </div>
  );
}

function Menu(props) {
  const { logout, auth, user } = props;
  console.log(user);
  return (
    <SemanticMenu className="ui secondary menu">
      <Link href="/">
        <SemanticMenu.Item as="a">HOME</SemanticMenu.Item>
      </Link>
      <Link href="/about">
        <SemanticMenu.Item as="a">ABOUT US</SemanticMenu.Item>
      </Link>

      <Link href="/createHookah">
        <SemanticMenu.Item as="a">CREATE HOOKAH</SemanticMenu.Item>
      </Link>
      {auth ? (
        <>
          {user !== null && (
            <Link href="/edit/me">
              <SemanticMenu.Item as="a">
                {user.name.toUpperCase()} {user.lastname.toUpperCase()}
              </SemanticMenu.Item>
            </Link>
          )}
          <SemanticMenu.Item onClick={logout}>
            <Icon name="power off" color="white" />
          </SemanticMenu.Item>
        </>
      ) : (
        <Link href="/register">
          <SemanticMenu.Item as="a">REGISTER</SemanticMenu.Item>
        </Link>
      )}
    </SemanticMenu>
  );
}
