import React from 'react';
import { ArrowLeft } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import 'twin.macro';

import { Container, Title } from './styles';

const Header = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <ArrowLeft onClick={() => navigate(-1)} size={24} />
      <Title>{children}</Title>
    </Container>
  );
};

export default Header;
