import 'reflect-metadata';

import * as inversify from 'inversify';

export const container = new inversify.Container({ skipBaseClassChecks: true });

export const Injectable = serviceIdentifier => (target) => {
  inversify.decorate(inversify.injectable(), target);
  container.bind(serviceIdentifier).to(target);
  return target;
}

export const inject = inversify.inject;

