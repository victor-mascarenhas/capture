import Nav from "./components/Nav";

//Views
import AboutUs from "./pages/AbouUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";

//Router
import history from "./config/history";
import { Route, Router, Switch } from "react-router-dom";

//Animation
import { AnimatePresence } from "framer-motion";

function Routes() {
  return (
    <Router history={history}>
      <Nav />
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={AboutUs} />
              <Route exact path="/work" component={OurWork} />
              <Route path="/work/:id" component={MovieDetail} />
              <Route path="/contact" component={ContactUs} />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}

export default Routes;
