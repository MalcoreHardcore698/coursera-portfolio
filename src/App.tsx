import React from 'react';
import { RecoilRoot } from 'recoil';

import SectionHero from 'components/SectionHero';
import SectionProjects from 'components/SectionProjects';
import SectionContact from 'components/SectionContact';
import PageHeader from 'components/PageHeader';
import PageFooter from 'components/PageFooter';
import LazyLoad from 'components/LazyLoad';

import 'theme/global.scss';

const App: React.FC = () => (
  <RecoilRoot>
    <PageHeader />

    <main>
      <SectionHero />
      <SectionProjects />
      <SectionContact />
    </main>

    <PageFooter />

    <LazyLoad />
  </RecoilRoot>
);

export default App;
