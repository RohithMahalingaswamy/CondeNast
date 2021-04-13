import './App.css';
import {LatestNews} from "./Components/LatestNews"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewsSpecific from './Components/NewsSpecific';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
          <LatestNews />
          </Route>
<Route path="/news" exact component={NewsSpecific} />
</Switch>
      </Router>
    </div>
  );
}

export default App;
