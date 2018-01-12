var fs = require("fs");
var personOne = require("./personone.json");
var personTwo = require("./persontwo.json");

var merge = personOne.concat(personTwo).sort();
merge.join("\n");

fs.writeFile("./persons.txt", merge, function(err) {
  if (err) {
    console.error("Error");
    console.error(err);
    return;
  }
  console.log("Persons file created");
});
