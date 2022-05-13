let {readFile} = require("fs");
readFile("newread.html", "utf8", (error, text) => {
  if (error) throw error;
  console.log("The file contains:", text);
});