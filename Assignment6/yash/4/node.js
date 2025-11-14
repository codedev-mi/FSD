
const fs = require('node:fs');

const content = 'this is some content';
const fileDir='c:/Users/HP-PC/Desktop/yash/4/sample.txt';

fs.writeFile(fileDir, content, err => {
  if (err) {
    console.error(err);
  } else {
    console.log('written in the file successfully!')
  }
});


//reading into the file
fs.readFile(fileDir,'utf-8',(err,data)=>{
  if(err){
    console.error('ERROR reading file node.js:: sample.txt')

  }
  else{
    console.log(data);
  }
})


//append into the file
fs.appendFile(fileDir,'\t appended text',(err)=>{
  
  if(err){
    console.error('ERROR appending content to the node.js:: sample.txt');
    
  }
  else{
    console.log('content appended successfully');
  }
})



















































