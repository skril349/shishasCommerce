import React from "react";
import { Container } from "semantic-ui-react";
import Header from "../../components/Header";

export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <Container fluid className="layout">
        <Header />
        {children}
      </Container>
    </>
  );
}
