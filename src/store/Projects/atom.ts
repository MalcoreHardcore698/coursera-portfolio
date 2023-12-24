import { atom } from 'recoil';

import type { TProjects } from 'types';

const DEFAULT_STATE: TProjects = [];

export default atom({
  key: 'store-projects',
  default: DEFAULT_STATE,
});
