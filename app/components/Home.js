var React = require('react');
var GetWordContainer = require('../containers/GetWordContainer');
var WordOfDayContainer = require('../containers/WordOfDayContainer');
require('../main.css');

function Home(props){
  return (
    <div className="content-wrapper">
      {/* <GetWordContainer/> */}
      <WordOfDayContainer/>
    </div>
  )
}


module.exports = Home;
