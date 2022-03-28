const fs = reqire("fs");
const request = require("request");


let input = process.argv.slice(2);
const url = input[0];
const localFilePath = input[1];

request(url, (error, response, body)=>{
  fs.writeFile(localFilePath, (error) =>{
    if(error){
      return console.log(error);
    } else {
      console.log(`Downloaded and saved ${} bytes to ${localFilePath}`);
    }
  })

})
