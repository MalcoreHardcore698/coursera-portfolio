import React from 'react';
import { AsyncImage } from 'loadable-image';
import { motion } from 'framer-motion';

import { LOCATORS } from 'const';
import Avatar from 'assets/images/avatar.png';

import './SectionHero.scss';

const SectionHero: React.FC = () => (
  <section id={LOCATORS.SECTION_HERO} className='section-hero'>
    <h1 className='section-hero__name'>
      <motion.span initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: .075, duration: .35 }}>
        Dan Popov
      </motion.span>
      <motion.span initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: .025, duration: .35 }}>
        A Frontend Developer Specialized in React
      </motion.span>
    </h1>

    <div className='section-hero__orbit'>
      <div className='orbit-axis axis-inner' />
      <div className='orbit-axis axis-outer' />
      <div className='orbit-axis axis-belt' />
      <div className='orbit-axis axis-core' />

      <div className='orbit-avatar'>
        <AsyncImage
          src={Avatar}
          alt='Dan Popov'
          style={{ width: 650, height: 650 }}
          loader={<div className='avatar-placeholder' />}
        />
      </div>
    </div>
  </section>
);

export default SectionHero;
