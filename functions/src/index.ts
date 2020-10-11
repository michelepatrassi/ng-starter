import * as functions from 'firebase-functions';

export const ssr = functions.https.onRequest((request, response) => {
  const server = require(`${process.cwd()}/dist/ng-starter/server/main`).app();

  return server(request, response);
});
