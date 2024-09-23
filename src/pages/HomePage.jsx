import Hero from 'components/HomePage/Hero/Hero';
import Header from 'components/HomePage/WelcomeSection/Header';
import React from 'react';
import Container from 'shared/Container/Container';

const HomePage = () => {
  return (
    <Container>
      <Header />
      <Hero />
    </Container>
  );
};

export default HomePage;
