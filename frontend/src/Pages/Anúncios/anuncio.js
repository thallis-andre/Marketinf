import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Collapse } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


import './anuncio.css';

export default function Anuncio() {


    const [anuncios, setAnuncios] = useState([1, 2, 3, 4, 5, 6]);



    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);




    return (

        <div className="content">

            <div className="header">
                <Row className="justify-content-md-center">
                    <div className="title">
                        <h1 className="search-marca">Meus anúncios</h1>
                    </div>

                    <Col lg={8}>
                        <Row className="justify-content-md-center">
                            {/* <div className="all-filters"></div> */}
                            <Col>
                                <div className="filter"><span className="title-filter">Ativos</span></div>
                            </Col>
                            <Col>
                                <div className="filter"><span className="title-filter">Inativos</span></div>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </div>
            <ul>

                {anuncios.map(anuncios => (
                    <section className="empresa-list" onClick={toggle}>

                        <div className="circle"></div>
                        <div className="empresa">



                            <Col>
                                <div className="foto">
                                    <img src="" />
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="nome">
                                    <h2 className="title">Tênis Nike Air</h2>
                                    <h3 className="description">R$50,00</h3>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className="cidade">
                                    <h2 className="title">Visitas</h2>
                                    <h3 className="description">83 visulizações</h3>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className="setor">
                                    <h2 className="title">Descrição</h2>
                                    <h3 className="description">Procuro digital influencer com mais de 5 mil seguidores
                                    para divulgar meus produtos  </h3>
                                </div>
                            </Col>

                        </div>

                        <div>

                        </div>

                    </section>
                ))}
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Tênis Nike air</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle}>Editar anúncio</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
            </ul>
        </div >





    );
};