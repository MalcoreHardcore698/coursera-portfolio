import React from 'react';

import { LOCATORS } from 'const';
import Animated from 'components/Animated';
import FormContact from 'components/FormContact';
import Background from 'assets/images/background.png';

import './SectionContact.scss';

const SectionContact: React.FC = () => (
  <section id={LOCATORS.SECTION_CONTACT} className='section-contact'>
    <h2>Contact Me</h2>

    <img src={Background} alt='Dan Popov' className='section-contact__background' />

    <Animated.Fade>
      <FormContact />
    </Animated.Fade>
  </section>
);

export default SectionContact;
