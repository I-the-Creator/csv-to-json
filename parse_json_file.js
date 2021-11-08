const FileSystem = require("fs");  

FileSystem.readFile('./output/output.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {

    obj = JSON.parse(data); //now it an object

    console.log(obj.length);  // length of array 
    console.log(obj);  // array of Node objects
    
    // get the Node name for all Nodes
    let nodeNames=[]; 
    for (var i = 0; i < obj.length; i++) {   
        let nodeItem = obj[i];
        nodeNames.push(nodeItem.TID);  // get array of node names
    }
    console.log(nodeNames); 


    // filter an Array of node names 
    function filterItems(query) {
        return nodeNames.filter(function(el) {
            return el.indexOf(query.toUpperCase()) > -1;
        })
      }
    console.log(filterItems('BEAU-14I-13'));

}});
