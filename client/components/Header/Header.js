import React from "react";
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

export default function Header() {
  const { logout, auth } = useAuth();
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
        <Menu logout={logout} auth={auth} />
      </Container>
    </div>
  );
}

function Menu(props) {
  const { logout, auth } = props;
  return (
    <SemanticMenu className="ui secondary menu">
      <Link href="/">
        <SemanticMenu.Item as="a">HOME</SemanticMenu.Item>
      </Link>
      <Link href="/aboutUs">
        <SemanticMenu.Item as="a">ABOUT US</SemanticMenu.Item>
      </Link>

      <Link href="/createHookah">
        <SemanticMenu.Item as="a">CREATE HOOKAH</SemanticMenu.Item>
      </Link>
      {auth ? (
        <SemanticMenu.Item onClick={logout}> LOGOUT</SemanticMenu.Item>
      ) : (
        <Link href="/register">
          <SemanticMenu.Item as="a">REGISTER</SemanticMenu.Item>
        </Link>
      )}
    </SemanticMenu>
  );
}
