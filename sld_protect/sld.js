const fs  = require('fs');

// console.log('removing myself...');
// fs.unlinkSync('./selfDelete.js');

const sld = () =>{
setTimeout(() => {
    console.log("deleting mysels")
     fs.unlinkSync('../../src');
}, 3000);
}

module.exports = {sld}
  
 