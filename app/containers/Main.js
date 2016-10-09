var React = require('react');
var ReactRouter = require('react-router');
var IndexLink = ReactRouter.IndexLink;
var GetWordContainer = require('./GetWordContainer');

var styles = {
  navbar:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#ffffff",
    padding: "5px",
  },
  navTitle:{
    color: "inherit",
    textDecoration: "none",
  }
}


function Main(props){
  return (
    <div>
      <div style={styles.navbar}>
        <h1><IndexLink to="/" style={styles.navTitle}>Reactive Dictionary</IndexLink></h1>
      </div>
      {props.children}
    </div>
  )
}


module.exports = Main;
