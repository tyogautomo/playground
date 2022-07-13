import React from 'react';

import { DropPoint } from '../../pages/DropPoint';
import { ROUTES } from '../config';

const DropPointRoute = {
  props: {
    path: ROUTES.DropPoint,
    element: <DropPoint />,
  },
  isPublic: true,
  name: 'Drop Point',
};

export { DropPointRoute };
