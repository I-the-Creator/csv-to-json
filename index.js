const CSVToJSON = require("csvtojson");
const FileSystem = require("fs");  
const CSVFilePath = "./input/input.csv";

CSVToJSON()
.fromFile(CSVFilePath)
.then((json) => {
    // console.log(json);

    FileSystem.writeFileSync("./output/output.json", JSON.stringify(json), "utf-8", (error) => {
        error ? console.log('Conversion Error!') : console.log('Conversion Successfully Complete!');
    });
})