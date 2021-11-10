import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import AboutApp from "./pages/About/App";
import AboutAuthor from "./pages/About/Author";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Registration from "./pages/Registration";
import Todo from "./pages/Todo";
import { store, persistor } from './store' 
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>        
        <Router>        
          <Switch>
            <Route exact path="/" component={Home} />							
            <Route exact path="/todo" component={Todo} />							
            <Route exact path="/about" component={About} />							
            <Route exact path="/about/about-app" component={AboutApp} />							
            <Route exact path="/about/about-author" component={AboutAuthor} />							
            <Route exact path="/contact" component={Contact} />							        
            <Route exact path="/form" component={Registration} />							        
            <Route component={NotFound} />							        
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
