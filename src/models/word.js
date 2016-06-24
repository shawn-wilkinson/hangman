var path = require('path');
var fs = require('fs');
var file = path.join('/usr/share/dict/web2');

function Word(){

}

Word.prototype.fetchWord = function(){
  var readFile= fs.readFileSync(file, {encoding: 'utf8'});
  var splitFile = readFile.split('\n');
  splitFile.pop()
  return splitFile.map(function(word), JSON.parse(word));
}
