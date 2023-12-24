import React, { useMemo, useState } from 'react';
import { GrMenu, GrClose } from 'react-icons/gr';
import { motion } from 'framer-motion';

import { LINKS } from 'const';
import type { NavigationLink } from 'components/Navigation/Navigation';
import Navigation from 'components/Navigation';
import Logo from 'assets/images/logo-text.svg';

import './PageFooter.scss';

/**
 * Base header component with predefined links and styles
 */
const Footer: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const icon = useMemo(() => {
    if (visible) {
      return (
        <GrClose
          size='20px'
          className='hamburger close-menu'
          onClick={() => setVisible(!visible)}
        />
      );
    }

    return (
      <GrMenu
        size='20px'
        className='hamburger'
        onClick={() => setVisible(!visible)}
      />
    );
  }, [visible]);

  const handleClose = (link: NavigationLink) => {
    setVisible(!visible);

    const target = document.getElementById(link.path) as HTMLElement;
    target.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <motion.footer
      className='page-footer'
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: .075, duration: .35 }}
    >
      <img className='page-footer__logo' src={Logo} alt='Little Lemon logo' />

      <Navigation links={LINKS} isExpanded={visible} onClick={handleClose} />

      <div className='page-footer__hamburger'>
        {icon}
      </div>

      <div className='page-footer__copyright'>
        <p>
          <span>2023</span>
          <span>Copyright</span>
        </p>
        <p>All rights reserved</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
