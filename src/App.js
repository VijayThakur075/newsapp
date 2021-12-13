import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import ShowNews from './component/ShowNews';
import NewData from './component/NewData';
import NewDescription from './component/NewDescription';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bookmark from './component/Bookmark';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/ShowNews">news</Link><br />
          <Link to="/bookmatkdata" mt="5" className="btn-btn-danger">Bookmark</Link>
        </div>
        < Switch>
          <Route exact path="/" />
          <Route path="/ShowNews" component={ShowNews} />
          <Route path="/NewData" component={NewData} />
          <Route path="/NewDescription" component={NewDescription} />
          <Route path="/bookmatkdata" component={Bookmark} />
        </Switch>
      </Router>



    </div>
  );
}

export default App;
