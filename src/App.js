import { MobileContainer } from './styles';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { routes } from './routes';
import { NotFoundPage } from './pages/404';

const App = () => {
  return (
    <MobileContainer>
      <Router>
        <Routes>
          {routes.map((route, i) => <Route key={i} {...route.props} />)}
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </MobileContainer>
  );
}

export default App;
