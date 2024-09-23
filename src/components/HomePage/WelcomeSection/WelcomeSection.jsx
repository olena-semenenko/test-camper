import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import css from './WelcomeSection.module.css';
import Section from 'shared/Section/Section';

const WelcomeSection = () => {
  return (
    <Section className={css.nav}>
      <Logo />
      <Navigation />
    </Section>
  );
};

export default WelcomeSection;
