var React = require('react');
var WordOfDay = require('../components/WordOfDay');
var wordnikHelpers = require('../helpers/wordnikHelpers');


var WordOfDayContainer = React.createClass({
  getInitialState: function(){
    return {
      isLoading: true,
      wods: {}
    }
  },
  componentDidMount: function(){
    wordnikHelpers.getAllWotds().then(function(allWords){
      this.setState({
        wods: allWords,
        isLoading: false
      })
    }.bind(this))
  },
  render: function(){
    return (
      <WordOfDay
       isLoading={this.state.isLoading}
       wods={this.state.wods}/>
    )
  }
})


module.exports = WordOfDayContainer;
