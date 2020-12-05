const { exec } = require('child_process');
const execAsyc = (cmd) => {
  return new Promise((res, rej) => {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        rej(stderr);
        return;
      }
      res(stdout);
    })
  })
}

module.exports = execAsyc;