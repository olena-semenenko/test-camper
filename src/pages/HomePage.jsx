import Hero from 'components/HomePage/Hero/Hero';
import WelcomeSection from 'components/HomePage/WelcomeSection/WelcomeSection';
import React from 'react';
import Container from 'shared/Container/Container';

const HomePage = () => {
  return (
    <Container>
      <WelcomeSection />
      <Hero />
    </Container>
  );
};

export default HomePage;
