import React from 'react'
import Hero from '../componentes/hero';
import Section1 from '../componentes/section1';
import Carrusel from '../componentes/carrusel';

function Main() {
  return (
    <div class="container-fluid mx-auto">
      <Hero/>
      <Section1/>
      <Carrusel/>
    </div>
  );
};

export default Main;