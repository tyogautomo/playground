import { DraggableRect } from '../../pages/DraggableRect';

const DraggableRectRoute = {
  props: {
    path: '/draggable-rect',
    component: DraggableRect,
    exact: true,
  },
  isPublic: true,
  name: 'Draggable Rect',
};

export { DraggableRectRoute };
