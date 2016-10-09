var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');
var NoDefinition = require('./NoDefinition');
require('../main.css');


function WordHeader(props){
  return (
    <div className="word-header-wrapper">
      <h1 className="word-header__header">{props.word}</h1>
      <WordAudio audio={props.audio} id="wordAudio"/>
    </div>
  )
}

WordHeader.propTypes = {
  word: PropTypes.string.isRequired,
  audio: PropTypes.array.isRequired
}


function WordAudio(props){
  var play = function(){
    var audio = document.getElementById(props.id);
    audio.play();
  }
  var soundEffect = props.audio[0] || {};
  return (
    <div className="audio-wrapper">
      <audio id={props.id} src={soundEffect.fileUrl || 'https://www.myinstants.com/media/sounds/sadtrombone.swf.mp3'}>
      </audio>
      <span className="glyphicon glyphicon-volume-up audio__button" onClick={play}></span>
    </div>
  )
}

WordAudio.propTypes = {
  audio: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired
}


function WordDefinition(props){
  return (
    <div>
      <dl className="definition__list">
        <dt>{props.details.partOfSpeech}</dt>
        <dd>{props.details.text}</dd>
      </dl>
    </div>
  )
}

WordDefinition.propTypes = {
  details: PropTypes.object.isRequired,
}

function DefinitionsList(props){
  var definitionlist;
  if (props.definitions && props.definitions.length === 0){
    definitionlist = <NoDefinition/>
  }else{
    definitionlist = props.definitions.map(function(each,index){
      return <WordDefinition details={each} key={index} />
    })
  }

  return (
    <div>
      {definitionlist}
    </div>
  )
}

DefinitionsList.propTypes = {
  definitions: PropTypes.array.isRequired
}

function Definitions(props){
  return ( props.isLoading === true? <Loading/> :
    <div className="definitions-wrapper">
      <WordHeader word={props.word} audio={props.info.audio}/>
      <DefinitionsList definitions={props.info.definitions}/>
    </div>
  )
}

Definitions.propTypes = {
  info: PropTypes.object.isRequired,
  word: PropTypes.string.isRequired,
}


module.exports = Definitions;
