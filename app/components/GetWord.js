var React = require('react');
var PropTypes = React.PropTypes;
require('../main.css')

function Button(props){
  return (
    <button className="get-word__button" type="submit">
      <span className="glyphicon glyphicon-search get-word__button-icon" aria-hidden="true"></span>
    </button>
  )
}

function Input(props){
  return (
    <input
      id="get-word-input"
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
  word: PropTypes.string.isRequired,
}

function GetWord(props){
  return (
    <form onSubmit={props.onSubmitWord}>
    <div className="get-word-wrapper">
      <Input onUpdateWord={props.onUpdateWord} word={props.word}/>
      <Button/>
    </div>
    </form>
  )
}

GetWord.propTypes = {
  word: PropTypes.string.isRequired,
  onUpdateWord: PropTypes.func.isRequired,
  onSubmitWord: PropTypes.func.isRequired,
}


module.exports = GetWord;
