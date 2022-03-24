import React from "react";
import { Button, Container } from "semantic-ui-react";
import Header from "../../components/Header";
export default function BasicLayout(props) {
  const { children, className } = props;
  return (
    <Container fluid className="other-layout">
      <Header />
      <Container className="content">{children}</Container>
    </Container>
  );
}
