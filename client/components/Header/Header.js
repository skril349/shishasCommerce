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
export default function Header() {
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
        <Menu />
      </Container>
    </div>
  );
}

function Menu() {
  return (
    <SemanticMenu className="ui secondary menu">
      <Link href="/orders">
        <SemanticMenu.Item as="a">ABOUT US</SemanticMenu.Item>
      </Link>

      <Link href="/wishlist">
        <SemanticMenu.Item as="a">FAVORITES</SemanticMenu.Item>
      </Link>

      <Link href="/account">
        <SemanticMenu.Item as="a">CREATE HOOKAH</SemanticMenu.Item>
      </Link>
    </SemanticMenu>
  );
}
