var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var PropTypes = React.PropTypes;
var Loading = require('./Loading');
var moment = require('moment');
require('../main.css');

function WodView(props){
  var formattedDate = moment(props.date,'YYYY-MM-DD').format('MMMM D, YYYY').toUpperCase();
  var word = props.word;
  var definition = props.definition;
  return (
    <div className="wod-view-wrapper">
      <h4>WORD OF THE DAY</h4>
      <div className="underline"></div>
      <h4>{formattedDate}</h4>
      <Link to={"/definitions/" + word} className="wod-link">
        <h2>{word}</h2>
      </Link>
      <h4>{definition}</h4>
    </div>
  )
}

function WodHolder(props){
  return (
    <div className="wod-holder-wrapper">
      {
        props.wods.map(function(each,index){
          return <WodView
                      date={each.date}
                      word={each.word}
                      definition={each.definitions[0].text}
                      key={index}/>
        })
      }
    </div>
  )
}

WodHolder.propTypes = {
  wods: PropTypes.array.isRequired,
}

function WordOfDay(props){
  return ( props.isLoading === true ? <Loading/>
      : <WodHolder wods={props.wods}/>
  )
}

module.exports = WordOfDay;
