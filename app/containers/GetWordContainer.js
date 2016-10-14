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
      word: e.target.value.toLowerCase()
    })
  },
  getDefinition: function(word){
    this.setState({
      word: ''
    });
    this.context.router.push({
      pathname: "/definitions/" + word,
    })
  },
  handleSubmitWord: function(e){
    e.preventDefault();
    var word = this.state.word.trim();
    this.getDefinition(word);
    document.getElementById("get-word-input").blur();
  },
  render: function(){
    return (
      <GetWord
        word={this.state.word}
        onUpdateWord={this.handleUpdateWord}
        onSubmitWord={this.handleSubmitWord}
        />
    )
  }
})

module.exports = GetWordContainer;
