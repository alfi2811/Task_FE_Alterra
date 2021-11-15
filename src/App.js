import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as mainActions from "./redux/actions/main";

import News from "./pages/News";
import Review from "./pages/Contact/Review";

function App() {
  return (    
    <Router>        
      <Switch>
        <Route exact path="/" component={Home} />							
        <Route exact path="/contact" component={Contact} />							        
        <Route exact path="/contact/review" component={Review} />							        
        <Route exact path="/news" component={News} />
      </Switch>
    </Router>      
  );
}
const mapStateToProps = (state) => ({
	main: state.main,
	news: state.news
});

const mapDispatchToProps = (dispatch) => ({
	actionsMain: bindActionCreators(mainActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
