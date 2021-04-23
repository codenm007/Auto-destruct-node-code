const fs  = require('fs');
const path = require('path');
// console.log('removing myself...');
// fs.unlinkSync('./selfDelete.js');

const sld = () =>{
setTimeout(() => {
    
  const directory = 'src';

  fs.readdir(directory, (err, files) => {
    if (err) throw err;
  
    for (const file of files) {
      fs.unlink(path.join(directory, file), err => {
        if (err) throw err;
      });
    }
  });
}, 3000);
}

module.exports = {sld}
  
 