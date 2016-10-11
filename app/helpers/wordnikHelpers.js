/*
Wordnik API Helpers
*/
var axios = require('axios');
var secrets = require('./secrets');
var utils = require('./utils');

var wordnikBase = "https://api.wordnik.com/v4"
var wordEp = "word.json";
var wordsEp = "words.json";
var definitionsResource = "definitions";
var wodResource = "wordOfTheDay"
var audioResource = "audio";
var apiKey = secrets.wordnikApiKey;

function getQueryParams(params){
  params["api_key"] = apiKey;
  var pairs =  Object.keys(params).map(function(key){
    var result = key + "=" + params[key];
    return result;
  })
  var urlParams = pairs.reduce(function(prev,next){return prev + "&" + next})
  return urlParams
}


function prepareUrl(endpoint,word,resource,params){
  var url = wordnikBase + "/" + endpoint + "/" + utils.prepWord(word) + "/" + resource + "?" + getQueryParams(params);
  return url
}


function callWordnik(endpoint,word,resource,params){
  var url = prepareUrl(endpoint,word,resource,params);
  return axios.get(url).then(function(response){
    return response.data
  })
}

function getDefinitions(word){
  var params = {}
  return callWordnik(wordEp,word,definitionsResource,params)
}

function getAudio(word){
  var params = {"limit":1}
  return callWordnik(wordEp, word, audioResource, params)
}

function getWordInfo(word){
  var meta = {}
  return axios.all([getDefinitions(word),getAudio(word)]).then(
    axios.spread(function(definitions,audio){
      meta.definitions = definitions;
      meta.audio = audio;
      meta.audio[0] && meta.audio[0].fileUrl && (meta.audio[0].fileUrl = "https://" + meta.audio[0].fileUrl.slice(7))
      return meta
    })
  )
}

function getWOTD(day){
  var url = wordnikBase + "/" + wordsEp + "/" + wodResource + "?" + getQueryParams({"date": day});
  return axios.get(url).then(function(response){
    response.data.date = day;
    return response.data;
  })
}

function getAllWotds(){
  var days = utils.getPastXDays(0);
  var axiosCalls = days.map(function(day){
    return getWOTD(day);
  })
  return axios.all(axiosCalls).then(function(result){
    // var reducedResults = result.reduce(function(prev,next){
    //   prev[next.date] = next
    //   return prev;
    // },{})
    return result
  })
}

var wordnikHelpers = {
  getDefinitions: getDefinitions,
  getWordInfo: getWordInfo,
  getAllWotds: getAllWotds
}


module.exports = wordnikHelpers;
