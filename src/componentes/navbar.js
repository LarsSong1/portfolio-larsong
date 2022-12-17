import React from 'react'
import logo from '../img/DevSpot.svg'
import '../css/main.css'
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-principal w-100">
            <div class="container-fluid">
                <a class="navbar-brand img-fluid" href="#!"><img src={logo} alt="logo" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto position-relative">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <p>Inicio</p>
                            </a>
                            <ul class="dropdown-menu">
                                <li><Link className="dropdown-item" to="/">Soy Lars</Link></li>
                                <li><a class="dropdown-item" href="/#clientes">Clientes </a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="/#portfolio">Portfolio</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <p>Sobre Mi</p>
                            </a>
                            <ul class="dropdown-menu">
                                <li><Link class="dropdown-item" to="/sobremi">Sobre Lars</Link></li>
                                <li><a class="dropdown-item" href="/sobremi#herramientas">Habilidades</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="/sobremi#enviar">Enviame un email</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <p>Contacto</p>
                            </a>
                            <ul class="dropdown-menu">
                                <li><Link class="dropdown-item" to="/contacto">Faq</Link></li>
                                <li><a class="dropdown-item" href="/contacto#contact-ways">Contacta mi servicio</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                
                            </ul>
                        </li>
                        
                    </ul>
                    <div class="redes-sociales">
                        <ul class="d-flex justify-content-around align-items-center">
                            <li><a href="https://www.linkedin.com/in/jair-alejandro-gavilanez-panchana-443a7b239/" target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin" ></i></a></li>
                            <li><a href="https://t.me/LarsSong" target="_blank" rel="noopener noreferrer"><i class="bi bi-telegram" ></i></a></li>
                            <li><a href="https://wa.me/5930967185460?text= Hola necesito de tu ayuda para una página Web" target="_blank" rel="noopener noreferrer"><i class="bi bi-whatsapp"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;