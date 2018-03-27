import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const MainContent = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          <div>
            {props.text}
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default MainContent;
