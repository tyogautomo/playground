import React from 'react';
import { DraggableRect } from '../../pages/DraggableRect';

const DraggableRectRoute = {
  props: {
    path: '/draggable-rect',
    element: <DraggableRect />,
  },
  isPublic: true,
  name: 'Draggable Rect',
};

export { DraggableRectRoute };
