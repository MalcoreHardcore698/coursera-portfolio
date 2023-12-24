import React from 'react'
import { AsyncImage } from 'loadable-image';

import { LOCATORS } from 'const';
import type { TProject } from 'types';

import './Card.scss';

interface Props {
  /**
   * Project object
   */
  project: TProject;
}

/**
 * Base dish card component with defined styles
 */
const Card: React.FC<Props> = ({ project }) => (
  <article data-testid={LOCATORS.CARD} className='card'>
    <div className='card-image'>
      <AsyncImage
        src={project.image}
        alt={project.title}
        style={{ width: '100%', height: 284 }}
        loader={<div className='card-image__placeholder' />}
      />
    </div>

    <div className='card-content'>
      <header className='card-content-title'>
        <h3>{project.title}</h3>
      </header>

      <p>{project.description}</p>
    </div>
  </article>
);

export default Card;
