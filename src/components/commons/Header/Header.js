import React from 'react';
import './Header.css';
import * as _ from 'lodash';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { ICONS } from '../../../assets/images';
import { FaCog } from 'react-icons/fa';


const Home = () =>  (
    <>
        <header id = "">
            <div id="header-account-info">
               <h2 className = "left-right"><a> 09/10/2019 22:00:00 </a></h2>
               <h2 className = ""><a> {_.toUpper('minha conta')} </a></h2>
               <h2 className = "left-right"><a> <FaCog /> </a></h2>
            </div>
            <div id = "header-container">
               <Container>
                  <Navbar collapseOnSelect expand = { "md" }>
                     <Navbar.Brand href="#home">
                        <img src = { ICONS.LOGO } alt = { "logo" }/>
                     </Navbar.Brand>
                     <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                     <Navbar.Collapse id="basic-navbar-nav">
                        <Nav defaultActiveKey="/" as = "ul">
                           <Nav.Item as = "li" className = "nav-menu active">
                              <img src = { ICONS.DASHBOARD }  className = "menu-icon"/>
                              <p> { _.toUpper('dashboard') } </p>
                           </Nav.Item>
                           <Nav.Item as = "li" className = "nav-menu" >
                              <div className = "badge-new" title = "Nova funcionalidade"> novo </div>
                              <img src = { ICONS.AGENDAMENTO }  className = "menu-icon"/>
                              <p> { _.toUpper('agendar post') } </p>
                           </Nav.Item>
                           <Nav.Item as = "li" className = "nav-menu" >
                              <img src = { ICONS.CALENDARIO } className = "menu-icon"/>
                              <p> { _.toUpper('calendário') } </p>
                           </Nav.Item>
                           <Nav.Item as = "li" className = "nav-menu" >
                              <img src = { ICONS.INBOX }  className = "menu-icon"/>
                              <p> { _.toUpper('inbox') } </p>
                           </Nav.Item>
                           <Nav.Item as = "li" className = "nav-menu" >
                              <img src = { ICONS.NEWSPAPER }  className = "menu-icon"/>
                              <p> { _.toUpper('feed') } </p>
                           </Nav.Item>
                           <Nav.Item as = "li" className = "nav-menu" >
                              <img src = { ICONS.CONTEUDO }  className = "menu-icon"/>
                              <p> { _.toUpper('workflow') } </p>
                           </Nav.Item>
                           <Nav.Item as = "li" className = "nav-menu" >
                              <img src = { ICONS.ACOMPANHAMENTO }  className = "menu-icon"/>
                              <p> { _.toUpper('acompanhamento') } </p>
                           </Nav.Item>
                           <Nav.Item as = "li" className = "nav-menu" >
                              <img src = { ICONS.RELATORIOS } className = "menu-icon"/>
                              <p> { _.toUpper('relatórios') } </p>
                           </Nav.Item>
                        </Nav>
                     </Navbar.Collapse>
                  </Navbar>
            </Container>
            </div>
        </header>
     </>
);


export default Home;