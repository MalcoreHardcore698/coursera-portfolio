import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import client from 'api';

import AboutAtom from '../atom';

export const useAbout = () => {
  const [about, setAbout] = useRecoilState(AboutAtom);

  const onFetch = useCallback(() => {
    return client.about().then(setAbout);
  }, [setAbout]);

  return {
    about,
    setAbout,
    onFetch,
  };
};
