import React from 'react';
import { motion } from 'framer-motion';

import { LOCATORS } from 'const';
import { useProjects } from 'store';
import Card from 'components/Card';

import './SectionProjects.scss';

const SectionProjects: React.FC = () => {
  const { projects } = useProjects();

  return (
    <section id={LOCATORS.SECTION_PORJECTS} className='section-projects'>
      {projects.map((project, index) => (
        <motion.div
          key={project._id}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: .05 + (.075 * index), duration: .25 }}
        >
          <Card project={project} />
        </motion.div>
      ))}
    </section>
  );
};

export default SectionProjects;
