export enum EProjectType {
  WEB_DEVELOPMENT,
  MOBILE_DEVELOPMENT,
  GAME_DEVELOPMENT,
}

export enum ESocialIcon {
  MEDIUM = 'MEDIUM',
  GITHUB = 'GITHUB',
  LINKEDIN = 'LINKEDIN',
  TELEGRAM = 'TELEGRAM'
}

export type TSocial = {
  name: string;
  url: string | null;
  icon: ESocialIcon;
};

export type TCompany = {
  name: string;
  url: string | null;
};

export type TAbout = {
  name: string;
  description: string;
  photo: string;
  socials: Array<TSocial>;
  birthday: string;
};

export type TProject = {
  _id: string,
  type: EProjectType;
  title: string;
  image: string;
  description: string;
  technologies: string[];
};

export type TProjects = Array<TProject>;
