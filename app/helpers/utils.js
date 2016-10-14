var moment = require('moment');
require('moment-range');

function prepWord(word){
  return encodeURIComponent(word)
}

function getPastXDays(number){
  var start = new Date();
  var end  = new Date();
  end.setDate(start.getDate() - number);
  var range = moment.range(end,start)
  var dates = range.toArray('days');
  var formattedDates = dates.map(function(each){
    return moment(each).format("YYYY-MM-DD");
  })
  return formattedDates;
}

var utils = {
  prepWord: prepWord,
  getPastXDays: getPastXDays
}

module.exports = utils;
