import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Todo from "./pages/Todo";

function App() {
  return (
    <Router>        
      <Switch>
        <Route exact path="/" component={Todo} />							
        <Route exact path="/home" component={Home} />							
        <Route exact path="/contact" component={Contact} />							        
      </Switch>
    </Router>
  );
}

export default App;
