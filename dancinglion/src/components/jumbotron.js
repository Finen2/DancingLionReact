import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const MainContent = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <div>
            {props.text}
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default MainContent;
