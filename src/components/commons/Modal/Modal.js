import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import * as _ from 'lodash';
import './Modal.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaGoogle, FaPinterestP, FaLinkedinIn, FaYoutube, FaWhatsapp, FaLongArrowAltRight } from "react-icons/fa";
import { Row } from 'react-bootstrap';
import Indicator from '../Stepper/Indicator';

export default props => (
    <>  
        <Modal show={ props.show } onHide={ props.handleClose }>
        <Modal.Header closeButton>

                <Modal.Title>
                    <Row>
                        <h5 style = {{color: `${props.color}`}}>
                            { props.channel === 'facebook'           ? <FaFacebookF />  : null }
                            { props.channel === 'twitter'            ? <FaTwitter />    : null }
                            { props.channel === 'instagram'          ? <FaInstagram />  : null }
                            { props.channel === 'google meu negocio' ? <FaGoogle />     : null }
                            { props.channel === 'pinterest'          ? <FaPinterestP /> : null }
                            { props.channel === 'linkedin'           ? <FaLinkedinIn /> : null }
                            { props.channel === 'youtube'            ? <FaYoutube />    : null }
                            { props.channel === 'whatsapp'           ? <FaWhatsapp />   : null }
                            { props.channel === 'google analytics'   ? <FaGoogle />     : null }
                        </h5>
                        <span>{`Vincular página do ${ _.startCase(_.toLower(props.channel))}`} </span>
                        <Indicator></Indicator>
                    </Row>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className = "text-description">Selecione a página que deseja vincular a este perfil</p>
                { props.children }

                <div style ={{ height: 100, textAlign: "center" }}>
                    <span> Não encontrou sua página ?</span>
                    <p className = "description-link"> Clique aqui para atualizar suas permissões do Facebook</p>
                </div> 
            </Modal.Body>
            <Modal.Footer >
                <Button variant="outline btn-light" onClick = { props.handleClose }> {_.toUpper("voltar")} </Button>
                <Button variant="primary" onClick = { props.next }> <div className ="row">{_.toUpper("próximo")}  <div style = {{marginLeft: 15}}> <FaLongArrowAltRight /> </div></div>
                           
                       
                </Button>
            </Modal.Footer>
        </Modal>
    </>

);