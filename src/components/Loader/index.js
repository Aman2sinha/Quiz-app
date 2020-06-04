import React from "react";
import { Container, Message, Icon } from "semantic-ui-react";

const Loader = ({ text }) => (
  <Container>
    <Message>
      <Icon name="circle notched" loading />
      <Message.Content>
        <Message.Header>Just wait some second</Message.Header>
        {text || "We are fetching that content for you."}
      </Message.Content>
    </Message>
  </Container>
);

export default Loader;
