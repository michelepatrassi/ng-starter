(async () => {
  const packageJson = require('./../../package.json');
  const fs = require('fs-extra');

  await fs.remove(`./shared`);

  packageJson.dependencies['@ng-starter/shared'] = 'file:../shared';

  await fs.writeFile('./package.json', JSON.stringify(packageJson, null, 2));
})();
