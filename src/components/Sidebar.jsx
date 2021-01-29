import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

const Sidebar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" onClick={ ()=> { scroll.scrollToTop() } }>
                <span className="d-block d-lg-none">Javier A. Mora Gil</span>
                <span className="d-none d-lg-block"><img 
                className="img-fluid img-profile rounded-circle mx-auto mb-2" 
                src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/143473083_5014367151969619_7238023881772849590_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_ohc=OLPufj0EVXkAX-Pru22&_nc_ht=scontent-mia3-2.xx&oh=b97e145861964e83561b5e9626eb03c7&oe=60386D27" 
                alt="Foto de perfil de facebook" /></span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link 
                        className="nav-link js-scroll-trigger" 
                        to="about"
                        spy={ true }
                        smooth={ true }
                        duration={ 700 }
                        >
                            Sobre mí
                        </Link>

                    </li>
                    <li className="nav-item">
                        <Link 
                            className="nav-link js-scroll-trigger" 
                            to="experience"
                            spy={ true }
                            smooth={ true }
                            duration={ 700 }
                            >
                                Experiencia
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                        className="nav-link js-scroll-trigger" 
                        to="education"
                        spy={ true }
                        smooth={ true }
                        duration={ 700 }
                        >
                            Educación</Link></li>
                    <li className="nav-item">
                        <Link 
                        className="nav-link js-scroll-trigger" 
                        to="skills"
                        spy={ true }
                        smooth={ true }
                        duration={ 700 }
                        >
                            Habilidades</Link></li>
                    <li className="nav-item">
                        <Link 
                        className="nav-link js-scroll-trigger" 
                        to="interests"
                        spy={ true }
                        smooth={ true }
                        duration={ 700 }
                        >
                            Intereses</Link></li>
                    <li className="nav-item">
                        <Link 
                        className="nav-link js-scroll-trigger" 
                        to="awards"
                        spy={ true }
                        smooth={ true }
                        duration={ 700 }
                        >
                            Certificaciones</Link></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Sidebar
