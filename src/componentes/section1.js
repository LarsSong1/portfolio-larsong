import React from 'react'
import '../css/section.css'
import tyresm from '../img/Tyres&M2logo.svg'

function Section1() {
    return (
        <section id="clientes" class="business container-fluid contenedor-clientes text-center mt-5">
            <h2>He tenido el placer de trabajar con los siguientes clientes</h2>
            <div class="business--logos">
                <ul>
                    <li>
                        <a href="#!">
                            <img src={tyresm} alt="llantas" />Tyres&M</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#!">
                            <img src={tyresm} alt="llantas" />Tyres&M</a>
                    </li>
                </ul>
            </div>
            <div class="business--text">
                <h1>Mi trabajo <br />Diseñador & <br /> Desarrollador Web 🧠 </h1>
                <h2>Mi especialidad es desarrollar ideas en una web</h2>
            </div>
        </section>
    );
};

export default Section1