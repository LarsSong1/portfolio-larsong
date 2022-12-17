import React from 'react'
import '../css/footer.css'
import dev from '../img/logo footer.svg'

function Footer() {
    return (
        <footer class="footer text-center text-lg-start  text-muted">
            <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                <div class="me-5 d-none d-lg-block">
                    <span>Puedes navegar por la pagina aqui:</span>
                </div>

                <div>
                    <a href="#!" class="me-4 text-reset">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#!" class="me-4 text-reset">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#!" class="me-4 text-reset">
                        <i class="fab fa-google"></i>
                    </a>
                    <a href="#!" class="me-4 text-reset">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#!" class="me-4 text-reset">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="#!" class="me-4 text-reset">
                        <i class="fab fa-github"></i>
                    </a>
                </div>

            </section>

            <section class="">
                <div class="container text-center text-md-start mt-5">

                    <div class="row mt-3">

                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                            <h6 class="text-uppercase fw-bold mb-4">
                                <img class="img-fluid imagen-footer" src={dev} alt="devspot" />
                            </h6>
                            <p>
                                Soy un Desarrollador y diseñador Front End Junior, encantado en conocerte. Puedes contactarme con los links que estan regados por la pagina. Bonito día
                            </p>
                        </div>

                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 class="text-uppercase fw-bold mb-4">
                                Inicio
                            </h6>
                            <p>
                                <a href="/#inicio" class="">Soy Lars</a>
                            </p>
                            <p>
                                <a href="/#clientes" class="">Clientes</a>
                            </p>
                            <p>
                                <a href="/#portfolio" class="">Portfolio</a>
                            </p>
                            
                        </div>

                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 class="text-uppercase fw-bold mb-4">
                                Sobre Mi
                            </h6>
                            <p>
                                <a href="/sobremi#sobremi" class="">Sobre Lars</a>
                            </p>
                            <p>
                                <a href="/sobremi#herramientas" class="">Habilidades</a>
                            </p>
                            <p>
                                <a href="/sobremi#enviar" class="">Enviame un email</a>
                            </p>
                            
                        </div>

                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">Contacto</h6>
                            <p><i class="fas fa-home me-3"></i><a href="/contacto#faq">Faq</a></p>
                            <p>
                                <i class="fas fa-envelope me-3"></i>
                                <a href="/contacto#contact-ways">Contacta mi servicio</a>
                            </p>
                            
                        </div>

                    </div>

                </div>
            </section>



            <div class="text-center p-4" >
                © 2022 Copyright:
                <p class="fw-bold"> Portfolio de Lars</p>
                
            </div>

        </footer>

    );
};

export default Footer;