import React from 'react'


const HomeScreen = () => {
    return (
        <>
         <div className="container-fluid p-0">
            {/* <!-- About--> */}
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Javier
                        <span className="text-primary">Mora</span>
                    </h1>
                    <div className="subheading mb-5">
                        Puerto La Cruz Venezuela · (+58) 412-878 69 53 ·
                        <a rel="correo electronico javier mora" href="mailto:name@email.com">Javier@expressativo.com</a>
                    </div>
                    <p className="lead mb-5">Hola, me llamo Javier y soy Diseñador Web y Desarrollador front-end, si estás aquí no te aburriré contandote una historia muy larga, hace unos años atras conocí el Diseño Web y desde ese día no he parado de hacer webs, más abajo te cuento que habiliades tengo y en bahance puedes encontrar algunos de mis trabajos.</p>
                    <div className="social-icons">
                        <a className="social-icon"  target="_blank" href="https://www.linkedin.com/in/javier-mora-020a41195/"  rel="noreferrer"  ><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-icon"  target="_blank" href="https://www.behance.net/j4viermoragil" rel="noreferrer"  ><i className="fab fa-behance"></i></a>
                        <a className="social-icon" target="_blank" href="https://github.com/j4viermora" rel="noreferrer" ><i className="fab fa-github" ></i></a>
                        <a className="social-icon" target="_blank" href="https://twitter.com/j4viermora" rel="noreferrer" ><i className="fab fa-twitter" ></i></a>
                        <a className="social-icon" target="_blank" href="https://www.facebook.com/j4viermora" rel="noreferrer" ><i className="fab fa-facebook-f" ></i></a>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            {/* <!-- Experience--> */}
            <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-5">Experiencia</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0"  target="_blank">Desarrollador Web Wordpress</h3>
                            <div className="subheading mb-3"> <a href="https://socialbuey.com/">Social Buey</a></div>
                            <p>Social Buey es una agencia digital Argentina con ella me ha tocado a hacer casi cualquier tipo de sitio web basado en Wordpress con funcionalidades muy especificas como buscadores por región, procesar pagos y algunos diseños bastante peculiares, gracias al gran equipo que me acompaña he podido realizar cada sitio web de manera satisfactoria</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">Agosto 2020 - Actualidad</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Diseñador web</h3>
                            <div className="subheading mb-3"> <a href="https://www.workana.com/freelancer/62d3e6273bc3792e5100c6e539b5a1bd?ref=user_dropdown" target="_blank"> Como Freelancer </a> </div>
                            <p>Suelo compartir mi tiempo entre los proyectos de la agencia juntos a mis proyectos personales, algunos son clientes a la antigua llegaron porque alguien me recomendo, algunos son gracias a plataformas como Workana, lo cierto es que espero seguir atendiendo mis clientes por mucho tiempo</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">December 20180 - Actualidad</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Administrador de sistemas</h3>
                            <div className="subheading mb-3"><a href="http://serviciointeligente.com.ve/" target="_blank"> Servicios inteligentes </a></div>
                            <p>
                                Trabaje seis meses en la administración de sistemas en la división de Robotica Educativa para Servicios inteligentes, en ella me encargaba de administrar y mantener los computadores de los laboratorios, y descubrí que administrar sistema no era lo mío y que prefería crear cosas.
                            </p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">Julio 2019 - Enero 2020</span></div>
                    </div>
              
                </div>
            </section>
            <hr className="m-0" />
            {/* <!-- Education--> */}
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Educación</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">U.E.P Luis Pastori</h3>
                            <div className="subheading mb-3">Bachiller en Ciencias</div>
                           
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">Septiembre 2009 - Jun 2014</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Autoditacta</h3>
                            <div className="subheading mb-3"> TI </div>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">2017 - Actualidad</span></div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            {/* <!-- Skills--> */}
            <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-5">Habilidades</h2>
                    <div className="subheading mb-3">Lenguajes de programación y herramientas</div>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item"><i className="fab fa-react"></i></li>
                        <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                        <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                        <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                        <li className="list-inline-item"><i className="fab fa-shopify"></i></li>
                        <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
                        <li className="list-inline-item"><i className="fab fa-wordpress"></i></li>
                        <li className="list-inline-item"><i className="fab fa-drupal"></i></li>
                        <li className="list-inline-item"><i className="fab fa-npm"></i></li>
                        <li className="list-inline-item"><i className="fab fa-github"></i></li>
                        <li className="list-inline-item"><i className="fab fa-trello"></i></li>
                      
                    </ul>
                    <div className="subheading mb-3"></div>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Mobile-First, Diseño Adaptable
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Maquetado de interfaces Adobe XD
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Sistemas Unix
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Herramientas de gestión de proyectos Asana, Trello
                        </li>
                    </ul>
                </div>
            </section>
            <hr className="m-0" />
            {/* <!-- Interests--> */}
            <section className="resume-section" id="interests">
                <div className="resume-section-content">
                    <h2 className="mb-5">Intereses</h2>
                    <p>Aparte del diseño y el desarrollo front-end, me gusta mucho la música, aprendí a tocar guitarra en mi tiempo libre, y el cuatro ( instrumento típico de mi país ) </p>
                    <p className="mb-0">Me gusta practicar deportes, el que más disfruto es el futbol, así que cuando no estoy trabajando, posiblemente este corriendo tras un balón</p>
                </div>
            </section>
            <hr className="m-0" />
            {/* <!-- Awards--> */}
            <section className="resume-section" id="awards">
                <div className="resume-section-content">
                    <h2 className="mb-5">Certificaciones</h2>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                            Intruducción al desarrollo web part I y II - Actívate Google
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                            React Hooks de cero a experto - Udemy por Fernando Herrera
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                            Html, Css y Js - Udemy por Nicolas Shurman
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                            Métodos de estudio - Udemy
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                            Desarrollo de App moviles - Actívate Google
                        </li>
                    </ul>
                </div>
            </section>
        </div>  
        </>
    )
}

export default HomeScreen
