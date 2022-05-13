var fs=require('fs');
fs.open('open and append.html','w',function(err,file){
    if(err) throw err;
    console.log('saved');
});