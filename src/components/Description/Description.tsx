import React, { useMemo } from 'react';

import { TExperience } from 'types';

import './Description.scss';

interface Props {
  experience: TExperience;
}

const Description: React.FC<Props> = ({ experience }) => {
  const company = useMemo(() => {
    if (!experience.company) return null;

    const url = experience.company.url;
    const className = 'description-footer__company';

    if (url) {
      return (
        <a href={url} className={className}>
          {experience.company.name}
        </a>
      );
    }

    return <span className={className}>{experience.company.name}</span>;
  }, [experience]);

  return (
    <div className='description'>
      <h4 className='description-title'>{experience.title}</h4>
      <footer className='description-footer'>
        <span className='description-footer__location'>
          {experience.location}
        </span>
        <span>at</span>
        {company}
      </footer>
    </div>
  );
};

export default Description;
