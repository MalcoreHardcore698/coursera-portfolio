import { useEffect } from 'react';

import { useAbout, useProjects } from 'store';

/**
 * A component that securely fetches data from the server
 */
const LazyLoad: React.FC = () => {
  const { onFetch: onFetchAbout } = useAbout();
  const { onFetch: onFetchProjects } = useProjects();

  useEffect(() => {
    onFetchAbout().finally(onFetchProjects);
  }, [onFetchAbout, onFetchProjects]);

  return null;
};

export default LazyLoad;
