import React from 'react';
import { Home } from '../../pages/Home';

const HomeRoute = {
  props: {
    path: '/',
    element: <Home />,
  },
  isPublic: true,
  name: 'HOme'
};

export { HomeRoute };
