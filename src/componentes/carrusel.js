import React from 'react'
import healthylife from '../img/medicaldesign.svg'
import goats from '../img/goats.svg'
import tour from '../img/tourbyecu.svg'
import '../css/section.css'

function Carrusel() {
  return (
    <div id="portfolio"  class="container-md mx-auto mt-5 Carrusel ">
      <section id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">

        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="w-75 mx-auto carrusuel-contenido text-center">
              <h1>Healthy Life Project 🚑</h1>
              <img src={healthylife} class="mt-5 d-block img-fluid mx-auto" alt="healthylife" />
              <div class="img-contenido mx-auto">
                <ul class="visualizadores  d-flex justify-content-center align-items-center">
                  <li>
                    <a href="#!">
                      <i class="bi bi-github"></i>
                      <p>Github</p>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i class="bi bi-eye-fill"></i>
                      <p>Ver Online</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="w-75 mx-auto carrusuel-contenido text-center">
              <h1>Tour By Ecu 🏔</h1>
              <img src={tour} class="mt-5 d-block img-fluid mx-auto" alt="tour" />
              <div class="img-contenido mx-auto">
                <ul class="visualizadores  d-flex justify-content-center align-items-center">
                  <li>
                    <a href="#!">
                      <i class="bi bi-github"></i>
                      <p>Github</p>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i class="bi bi-eye-fill"></i>
                      <p>Ver Online</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="w-75 mx-auto carrusuel-contenido text-center">
              <h1>Glasmorphism Effect ⚽</h1>
              <img src={goats} class="mt-5 d-block img-fluid mx-auto" alt="goats" />
              <div class="img-contenido mx-auto">
                <ul class="visualizadores  d-flex justify-content-center align-items-center">
                  <li>
                    <a href="#!">
                      <i class="bi bi-github"></i>
                      <p>Github</p>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i class="bi bi-eye-fill"></i>
                      <p>Ver Online</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev mx-auto" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually">Previous</span>
        </button>
        <button class="carousel-control-next mx-auto" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">

          <span class="visually">Next</span>
          <span class="carousel-control-next-icon" aria-hidden="true"></span>

        </button>
      </section>
    </div>
  );
};

export default Carrusel;

