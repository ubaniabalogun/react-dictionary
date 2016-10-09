var React = require('react');
var PropTypes = React.PropTypes;
require('../main.css')

function Button(props){
  return (
    <button className="get-word__button" type="button" onClick={props.onSubmitWord}>
      <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
    </button>
  )
}

Button.propTypes = {
  onSubmitWord: PropTypes.func.isRequired,
}

function Input(props){
  return (
    <input
      className="get-word__input"
      type="text"
      autoComplete="off"
      autoCapitalize="off"
      autoCorrect="off"
      onChange={props.onUpdateWord}
      value={props.word}/>
  )
}

Input.propTypes = {
  onUpdateWord: PropTypes.func.isRequired,
  word: PropTypes.string.isRequired
}

function GetWord(props){
  return (
    <div className="get-word-wrapper">
      <Input onUpdateWord={props.onUpdateWord} word={props.word}/>
      <Button onSubmitWord={props.onSubmitWord}/>
    </div>
  )
}

GetWord.propTypes = {
  word: PropTypes.string.isRequired,
  onUpdateWord: PropTypes.func.isRequired,
  onSubmitWord: PropTypes.func.isRequired,
}


module.exports = GetWord;
