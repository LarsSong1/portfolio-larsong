import React from 'react'
import '../css/sobremi.css'
import human from '../img/human-dog.svg'
import Herramientas from '../componentes/herramientas';
import html from '../img/html-1.svg'
import css from '../img/css-3.svg'
import figma from '../img/figma-1.svg'
import python from '../img/python-5.svg'
import django from '../img/django.svg'
import javascript from '../img/logo-javascript.svg'
import react from '../img/react-2.svg'
import vscode from '../img/visual-studio-code-1.svg'
import ingles from '../img/duolingo-symbol-icon.svg'
import devspot from '../img/DevSpot.svg'

function Sobremi() {
  return (
    <section id='sobremi' class="container-fluid contenedor-sobremi d-flex mx-auto flex-wrap">
      <div class=" mx-auto row container-md col-12 col-md-5 col-lg-5 texto d-flex flex-column justify-content-start">
        <h1 class="mt-5">Sobre Lars ✨ </h1>
        <h2>Hola me llamo Alejandro en realidad, bajo el pseudonimo de lars, soy
          un estudiante Ecuatoriano apasianado por el "Hello world" y todo lo
          que abarca la programación web. Soy una persona creativa pero
          sobretodo con mucha disciplina y concistencia la cual aplico en mis
          proyectos con el fin de lograr mis objetivos</h2>

        <br />
        <br />
        <p>Mentalidad en programación: No programo para resolver problemas,
          programo para buscar soluciones</p>
      </div>
      <div class="row  mx-auto container-md col-12 col-md-4 col-lg-4">
        <img class="img-fluid" src={human} alt="humananddog" />
      </div>
      <div id="herramientas" class="container-md mx-auto contenedor-habilidades text-center">
        <h1>Herramientas y Habilidades 📚</h1>
        <div class="mt-5 container-md mx-auto d-flex flex-wrap justify-content-center align-items-center programas">
          <Herramientas
            img={html}
            herraname="Html"
            clase1="tool tool1"
            clase2="level l-html"
          />
          <Herramientas
            img={css}
            herraname="Css"
            clase1="tool tool2"
            clase2="level l-css"
          />
          <Herramientas
            img={figma}
            herraname="Figma"
            clase1="tool tool3"
            clase2="level l-figma"
          />
          <Herramientas
            img={python}
            herraname="Python"
            clase1="tool tool4"
            clase2="level l-python"
          />
          <Herramientas
            img={django}
            herraname="Django"
            clase1="tool tool5"
            clase2="level l-django"
          />
          <Herramientas
            img={javascript}
            herraname="JavaScript"
            clase1="tool tool6"
            clase2="level l-javascript"
          />
          <Herramientas
            img={react}
            herraname="React"
            clase1="tool tool7"
            clase2="level l-react"
          />
          <Herramientas
            img={vscode}
            herraname="VScode"
            clase1="tool tool8"
            clase2="level l-vscode"
          />
          <Herramientas
            img={ingles}
            herraname="Niv. Ingles"
            clase1="tool tool9"
            clase2="level l-ingles"
          />

        </div>
      </div>


      <div class="idea-contenedor d-flex flex-wrap">
        <div id="enviar" className="contenedor-idea container-md mx-auto row col-12 col-md-5 col-lg-5">
          <h2>Hagamos Realidad Tu Idea 💡</h2>
          <h1>Si estas en busca de un diseñador y desarrollador Front-End Jr. ¡Hablemos! 💬</h1>
          <div class="main-btn boton-contacto">
            <button type="button" class="btn btn-primary boton-main">
              <a href="mailto:damianalejandrofirst@gmail.com">Contacto
                <i class="bi bi-envelope-fill"></i>
              </a>
            </button>
          </div>
        </div>
        <div class="container-md mx-auto row col-12 col-md-4 col-lg-4">
          <img class="img-fluid" src={devspot} alt="devspot" />
        </div>
      </div>


    </section>
  );
};

export default Sobremi;