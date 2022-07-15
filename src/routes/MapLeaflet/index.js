import React from 'react';

import { MapLeaflet } from '../../pages/MapLeaflet';
import { ROUTES } from '../config';

const MapLeafletRoute = {
  props: {
    path: ROUTES.MapLeaflet,
    element: <MapLeaflet />,
  },
  isPublic: true,
  name: 'Map Google',
};

export { MapLeafletRoute };
