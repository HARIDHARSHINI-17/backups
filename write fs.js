var fs = require('fs');
fs .writeFile('writefs.html',"HELLO SIPCOT",function(err){
    if(err) throw err;
    else{
    console.log('saved');
    }
});