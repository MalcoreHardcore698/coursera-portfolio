import { atom } from 'recoil';

import type { TAbout } from 'types';

const DEFAULT_STATE: TAbout = {} as TAbout;

export default atom({
  key: 'store-about',
  default: DEFAULT_STATE,
});
