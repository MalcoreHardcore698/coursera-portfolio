import React from 'react';

import type { ExtendedIconProps } from './types';

const Icon: React.FC<ExtendedIconProps> = ({ component: Component, ...props }) => {
  return <Component {...props} />;
};

export default Icon;
