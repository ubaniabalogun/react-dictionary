var React = require('react');
var PropTypes = React.PropTypes;
require('../main.css');

function Loading(props){
  return (
    <div className="loading-wrapper">
      <h1 className="loading__header">Loading</h1>
    </div>
  )
}


module.exports = Loading;
