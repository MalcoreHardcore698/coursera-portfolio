import React, { useMemo } from 'react';
import type { ReactNode } from 'react';
import cn from 'classnames';

import './Navigation.scss';

export type NavigationLink = {
  path: string;
  title: ReactNode;
  disabled?: boolean;
};

interface Props {
  links: Array<NavigationLink>;
  isExpanded?: boolean;
  onClick?: (link: NavigationLink) => void;
}

/**
 * Base navigation component
 */
const Navigation: React.FC<Props> = ({ links, isExpanded, onClick }) => {
  const menu = useMemo(() => {
    return (
      <ul className='navigation-list'>
        {links.map(link => (
          <li
            key={link.path}
            className={cn({ disabled: !!link?.disabled })}
            onClick={() => !link?.disabled && onClick?.(link)}
          >
            {link.title}
          </li>
        ))}
      </ul>
    )
  }, [links, onClick]);

  return (
    <nav className={cn('navigation', { expanded: isExpanded })}>
      {menu}
    </nav>
  );
};

export default Navigation;
