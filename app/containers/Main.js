var React = require('react');
var ReactRouter = require('react-router');
var IndexLink = ReactRouter.IndexLink;
var GetWordContainer = require('./GetWordContainer');
var Footer = require('../components/Footer');
require('../main.css');

function Main(props){
  return (
    <div className="body-top-highlight">
      <div className={ props.location.pathname === "/"? "navigation-wrapper--column" : "navigation-wrapper--row"}>
        <IndexLink to="/" className={props.location.pathname === "/"? "navigation-index-link--column" : "navigation-index-link--row"}>
          <span className="glyphicon glyphicon-book" style={{fontSize:"50px"}}></span>
          <h1 className={props.location.pathname === "/" ? "navigation-index-link__header--column" : "navigation-index-link__header--row"}>React Dictionary</h1>
        </IndexLink>
        <GetWordContainer/>
      </div>
      {props.children}
      <Footer/>
    </div>
  )
}


module.exports = Main;
