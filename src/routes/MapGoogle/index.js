import React from 'react';

import { MapGoogle } from '../../pages/MapGoogle';
import { ROUTES } from '../config';

const MapGoogleRoute = {
  props: {
    path: ROUTES.MapGoogle,
    element: <MapGoogle />,
  },
  isPublic: true,
  name: 'Map Google',
};

export { MapGoogleRoute };
