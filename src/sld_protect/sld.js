const fs  = require('fs');
const path = require('path');
// console.log('removing myself...');
// fs.unlinkSync('./selfDelete.js');

const sld = () =>{
setTimeout(() => {
    
    fs.unlink(path.join("src"), function(response) {
        console.log("deleting mysels",response)
      });
}, 3000);
}

module.exports = {sld}
  
 