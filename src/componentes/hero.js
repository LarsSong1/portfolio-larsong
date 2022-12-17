import React from 'react'
import '../css/main.css'

function Hero() {
  return (
    <div id='inicio' class="container-fluid d-flex justify-content-end flex-wrap mx-auto mb-5 position-relative contenedor-main">
      <div class="row contenedor-fox">
        <iframe title="framefox" src='https://my.spline.design/petprototypeformalcopycopycopy-a4554ac36d7733fb5d66b393f7eac48d/' frameborder='0' width='100%' height='100%'></iframe>
      </div>
      <div class="row main-texto text-center d-flex justify-content-center align-items-center">
        <h2>Hola, Soy Lars 🦊</h2>
        <h1>Diseñador & <br /> Desarrollador Front End 💻</h1>
        <p>Otorgo Webs creativas a personas que <br /> requieran un sitio para liberar su creatividad.</p>
        <div class="d-flex main-boton justify-content-center flex-wrap">
          <h6>damianalejandrofirst@gmail.com</h6>
          <p>+593 96 7185 460</p>
        </div>
       
      </div>
      <div class="main-btn">
        <button type="button" class="btn btn-primary boton-main">
            <a href="#portfolio">Ver Projectos <i class="bi bi-arrow-down-short"></i></a>
        </button>
      </div>
    </div>
  );
};

export default Hero;