import { MobileContainer } from './styles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { OTPPage } from './pages/OTP/index';
import { routes } from './routes';

function App() {
  return (
    <MobileContainer>
      <Router>
        <Switch>
          {routes.map(route => <Route {...route.props} />)}
        </Switch>
      </Router>
      <OTPPage />
    </MobileContainer>
  );
}

export default App;
