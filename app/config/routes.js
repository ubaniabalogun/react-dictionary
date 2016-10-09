var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../containers/Main');
var Home = require('../components/Home');
var DefinitionsContainer = require('../containers/DefinitionsContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="/definitions/:word" component={DefinitionsContainer}/>
    </Route>
  </Router>
)

module.exports = routes;
