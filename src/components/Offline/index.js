import React from "react";
import { Container, Segment, Header, Icon } from "semantic-ui-react";

const Offline = () => (
  <Container>
    <Segment placeholder>
      <Header icon>
        <Icon name="unlink" />
        <br />
        Please check your internet connection.
      </Header>
    </Segment>
  </Container>
);

export default Offline;
