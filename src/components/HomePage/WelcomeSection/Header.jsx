import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import css from './Header.module.css';
import Section from 'shared/Section/Section';

const Header = () => {
  return (
    <Section className={css.nav}>
      <Logo />
      <Navigation />
    </Section>
  );
};

export default Header;
