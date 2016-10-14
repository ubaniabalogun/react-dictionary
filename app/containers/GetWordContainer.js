var React = require('react');
var GetWord = require('../components/GetWord');
var wordnikHelpers = require('../helpers/wordnikHelpers');

var GetWordContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  getInitialState: function(){
    return {
      word: ''
    }
  },
  handleUpdateWord: function(e){
    this.setState({
      word: e.target.value
    })
  },
  getDefinition: function(){
    var word = this.state.word;
    this.setState({
      word: ''
    });
    this.context.router.push({
      pathname: "/definitions/" + word,
    })
  },
  handleEnterKey: function(e){
    if (e.key == 'Enter'){
      e.preventDefault();
      this.getDefinition();
      e.target.blur();
    }
  },
  handleSubmitWord: function(e){
    e.preventDefault();
    this.getDefinition();
  },
  render: function(){
    return (
      <GetWord
        word={this.state.word}
        onUpdateWord={this.handleUpdateWord}
        onSubmitWord={this.handleSubmitWord}
        onEnterKey={this.handleEnterKey}
        />
    )
  }
})

module.exports = GetWordContainer;
