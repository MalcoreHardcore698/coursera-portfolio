import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import client from 'api';

import ProjectsAtom from '../atom';

export const useProjects = () => {
  const [projects, setProjects] = useRecoilState(ProjectsAtom);

  const onFetch = useCallback(() => {
    return client.projects().then(setProjects);
  }, [setProjects]);

  return {
    projects,
    setProjects,
    onFetch,
  };
};
