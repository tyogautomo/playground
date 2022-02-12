import React from 'react';
import { Link } from 'react-router-dom';

import { contents } from './constant';
import { Title, Spacer, Container, Content, Card } from './styles';

const Home = () => {
  return (
    <Container>
      <Spacer />
      <Title>Home</Title>
      <Content>
        {contents.map((content, i) => (
          <Link to={content.path} key={i}>
            <Card>{i + 1}. {content.title}</Card>
          </Link>
        ))}
      </Content>
    </Container>
  );
}

export { Home };
