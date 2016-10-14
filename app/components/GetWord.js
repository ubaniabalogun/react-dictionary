var React = require('react');
var PropTypes = React.PropTypes;
require('../main.css')

function Button(props){
  return (
    <button className="get-word__button" type="button" onClick={props.onSubmitWord}>
      <span className="glyphicon glyphicon-search get-word__button-icon" aria-hidden="true"></span>
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
      onKeyPress={props.onEnterKey}
      value={props.word}/>
  )
}

Input.propTypes = {
  onUpdateWord: PropTypes.func.isRequired,
  word: PropTypes.string.isRequired,
  onEnterKey: PropTypes.func.isRequired,
}

function GetWord(props){
  return (
    <div className="get-word-wrapper">
      <Input onUpdateWord={props.onUpdateWord} word={props.word} onEnterKey={props.onEnterKey}/>
      <Button onSubmitWord={props.onSubmitWord}/>
    </div>
  )
}

GetWord.propTypes = {
  word: PropTypes.string.isRequired,
  onUpdateWord: PropTypes.func.isRequired,
  onSubmitWord: PropTypes.func.isRequired,
  onEnterKey: PropTypes.func.isRequired,
}


module.exports = GetWord;
