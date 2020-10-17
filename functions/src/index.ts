import * as functions from 'firebase-functions';

export const ssr = functions.https.onRequest(
  async (req, res) => await (await import('./http/ssr')).default(req, res),
);
export const example = functions.https.onRequest(
  async (req, res) => await (await import('./http/example')).default(req, res),
);
