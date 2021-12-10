import './App.css';
import {BrowserRouter as Router, Route,Link} from "react-router-dom"
import ShowNews from './component/ShowNews';
import NewData from './component/NewData';
import NewDescription from './component/NewDescription';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/ShowNews">news</Link>
        <Route exact path="/"/>
        <Route path="/ShowNews" component={ShowNews}/>
        <Route path="/NewData" component={NewData}/>
       <Route path="/NewDescription" component={NewDescription} />

        </Router>
  
  
    
    </div>
  );
}

export default App;
