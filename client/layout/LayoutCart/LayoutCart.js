import React from "react";
import { Container } from "semantic-ui-react";
import Header from "../../components/Header";
import classNames from "classnames";
export default function Layout(props) {
  const { children, className } = props;
  return (
    <Container
      fluid
      className={classNames("layout", {
        [className]: className,
      })}
    >
      <Header className="fixedHeader" />
      <Container fluid className="content">
        {children}
      </Container>
    </Container>
  );
}
