var fs = require('fs');
fs.appendFile('open and append11.html','LAMP TEAM',function(err){
if(err) throw err
else{
 console.log('saved');}
});