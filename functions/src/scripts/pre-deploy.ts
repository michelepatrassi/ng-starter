(async () => {
  const fs = require('fs-extra');
  const util = require('util');
  const exec = util.promisify(require('child_process').exec);
  const packageJson = require('./../../package.json');

  await fs.remove(`./shared`);
  await fs.copy(`../shared`, `./shared`);

  packageJson.dependencies['@ng-starter/shared'] = 'file:./shared';

  await fs.writeFile('./package.json', JSON.stringify(packageJson, null, 2));

  const { stdout, stderr } = await exec('npm install');
  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
})();
