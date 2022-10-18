
import Listone from './components/Pages/Listone';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Blogs from './components/Pages/Blogs';
import FormNew from './components/Pages/FormNew';



function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Listone />
        </Route>
        <Route path="/blogs/:id">
          <Blogs />
        </Route>
        <Route path="/formnew">
          <FormNew />
        </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
