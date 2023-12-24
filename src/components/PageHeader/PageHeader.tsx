import React, { useMemo, useState } from 'react';
import { TiSocialFacebookCircular, TiSocialInstagramCircular, TiSocialLinkedinCircular } from 'react-icons/ti';
import { GrMenu, GrClose } from 'react-icons/gr';
import { motion } from 'framer-motion';

import { LINKS } from 'const';
import Navigation from 'components/Navigation';
import Logo from 'assets/images/logo-text.svg';

import './PageHeader.scss';
import { NavigationLink } from '../Navigation/Navigation';

/**
 * Base header component with predefined links and styles
 */
const Header: React.FC = () => {
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
    <motion.header
      className='page-header'
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: .075, duration: .35 }}
    >
      <img className='page-header__logo' src={Logo} alt='Little Lemon logo' />

      <Navigation links={LINKS} isExpanded={visible} onClick={handleClose} />

      <div className='page-header__hamburger'>
        {icon}
      </div>

      <ul className='page-header__socials'>
        <li className='links-socials__item'>
          <a href='https://facebook.com'>
            <TiSocialFacebookCircular />
          </a>
        </li>
        <li className='links-socials__item'>
          <a href='https://youtube.com'>
            <TiSocialInstagramCircular />
          </a>
        </li>
        <li className='links-socials__item'>
          <a href='https://linkedin.com'>
            <TiSocialLinkedinCircular />
          </a>
        </li>
      </ul>
    </motion.header>
  );
};

export default Header;
