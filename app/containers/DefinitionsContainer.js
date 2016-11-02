var React = require('react');
var Definitions = require('../components/Definitions');
var wordnikHelpers = require('../helpers/wordnikHelpers');


var DefinitionsContainer = React.createClass({
  getInitialState: function(){
    return {
      isLoading: true,
      info: {}
    }
  },
  componentDidMount: function(){
    this.makeRequest(this.props.params.word)
  },
  makeRequest: function(word){
    wordnikHelpers.getWordInfo(word).then(function(info){
      this.setState({
        isLoading: false,
        info: info
      })
    }.bind(this));
  },
  componentWillReceiveProps: function (nextProps) {
    this.setState({
      isLoading: true
    })
    this.makeRequest(nextProps.routeParams.word)
  },
  render: function(){
    return(
      <Definitions
        word={this.props.params.word}
        info={this.state.info}
        isLoading={this.state.isLoading} />
    )
  }
})


module.exports = DefinitionsContainer;
