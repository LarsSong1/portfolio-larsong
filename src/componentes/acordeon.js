import React from 'react'
import linkedin from '../img/linkedin-icon.svg'
import telegram from '../img/telegram-1.svg'
import whatsapp from '../img/whatsapp-svgrepo-com.svg'

function Acordeon() {
    return (
        <section class="container-fluid mx-auto">
            <div  class="mx-auto col-12 col-md-9 col-lg-9 accordion accordion-flush" id=" accordionFlushExample">
                <h1 id="faq" class="mb-5">Para mi es importante que sepas lo siguiente</h1>
                <div  class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            ¿Deberiamos hacer un contrato? 🧾
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <p>Considero que si o al menos un acuerdo donde ambas partes se comprometan de inicio a fin con el proyecto</p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            ¿Cuanto cobro por un Sitio Web de contacto? 💸
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <p>El precio oscilará dependiendo de las necesidades del cliente, sin embargo un sitio web de contacto basico estaria por los $300</p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            ¿Estoy trabajando con un equipo? 👨‍👦‍👦
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <p>Por el momento no sin embargo, se aspira a que en cuestión de meses o años se conforme un equipo de trabajo con el fin de mejorar la calidad del servicio.</p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingFour">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            ¿Cual es mi zona horaria? 🕤
                        </button>
                    </h2>
                    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <p>Zona horaria de Quito (GMT-5)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="contact-ways" class="container-fluid d-flex contenedor-formulario justify-content-center align-items-center flex-wrap">
                <div className="mx-auto row col-12 col-md-5 col-lg-5">
                    <form class="formulario d-flex flex-column align-items-center justify-content-center" name='f-contactarPproyecto' netlify>
                        <div class="mb-3 w-50">
                            <label for="exampleInputEmail1" class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Nombre del autor' />

                        </div>
                        <div class="mb-3 w-50">
                            <label for="exampleInputPassword1" class="form-label">Correo</label>
                            <input type="email" class="form-control" id="exampleInputPassword1" placeholder='Correo electrónico' />
                        </div>

                        <div class="mb-3 w-50">
                            <label for="example" class="form-label">Mensaje</label>

                            <textarea type="" class="form-control" id="example1" placeholder='Sobre el Projecto'></textarea>
                        </div>

                        <div class="main-btn contacto-boton">
                            <button type="submit" class="btn btn-primary boton-main">
                                Enviar 📩
                            </button>
                        </div>
                    </form>
                </div>
                <div class="formulario-redes d-flex justidy-content-center align-items-center row mx-auto col-12 col-md-5 col-lg-5">
                        
                    <div class="contact-ways">
                        <h2 class="mb-5 text-center">Contactame vía:</h2>
                        <ul>
                            <a href="https://www.linkedin.com/in/jair-alejandro-gavilanez-panchana-443a7b239/" target="_blank" rel="noopener noreferrer">
                            <li><img class="img-fluid" src={linkedin} alt="linkedin" /></li>
                            <li>Visita mi Perfil de linkedin</li>
                            </a>
                        </ul>
                        <ul>
                            <a href="https://t.me/LarsSong" target="_blank" rel="noopener noreferrer">
                            <li><img class="img-fluid" src={telegram} alt="telegram" /></li>
                            <li>Mandame un mensaje por Telegram</li>
                            </a>
                        </ul>
                        <ul>
                            <a href="https://wa.me/5930967185460?text= Hola necesito de tu ayuda para una página Web" target="_blank" rel="noopener noreferrer">
                            <li><img class="img-fluid" src={whatsapp} alt="whatsapp" /></li>
                            <li>Escribeme por Whatsapp</li>
                            </a>
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Acordeon;