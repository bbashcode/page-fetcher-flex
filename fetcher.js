const fs = require("fs");
const request = require("request");
let input = process.argv.slice(2);

const url = input[0];
const localFilePath = input[1];

request(url, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(localFilePath, body, error => {
    if (error) {
      console.error(error);
      return;
    }
    printAfterDownload();//file written successfully
  });
});

const printAfterDownload = function(){
  console.log("Dowloaded and saved file!");
};

