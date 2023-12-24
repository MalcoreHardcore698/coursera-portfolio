import type { TAbout, TCareer, TProjects } from 'types';
import { ESocialIcon } from 'types';

import about from './fixtures/about.json';
import projects from './fixtures/projects.json';

export interface ContactValues {
  name: string;
  email: string;
  target: string;
  message: string;
}

export interface Client {
  about: () => Promise<TAbout>;
  projects: () => Promise<TProjects>;
  sendMessage: (values: ContactValues) => Promise<void>;
}

/**
 * This is a simple server simulation
 */
const client: Client = {
  about: () => Promise.resolve({
    ...about,
    socials: about.socials.map(social => ({
      ...social,
      icon: social.icon as ESocialIcon,
    })),
  }),

  projects: () => Promise.resolve(
    projects as unknown as TProjects,
  ),

  sendMessage: Promise.resolve,
};

export default client;
