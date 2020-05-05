import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Row, Col, Button, InputGroup, FormControl, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logoBSolo from "../../../assets/LogoBrancasolo.svg";



export default function Divulgacoes() {

    
    const history = useHistory()
    const [anuncios, setAnuncios] = useState([1, 2, 3]);
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


    return (

        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/empresa">
                    <img
                        alt="."
                        src={logoBSolo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    Marketinf
                </Navbar.Brand>
                <Nav className="mr-auto">
                </Nav>
                <Nav className="mr-auto">
                </Nav>
                <Nav className="mr-auto">
                </Nav>
                <Nav className="mr-auto">
                </Nav>
                <Nav className="mr-auto">
                </Nav>
                <Nav className="mr-auto">
                </Nav>
                <Nav className="mr-auto">
                    <NavDropdown title="Perfil" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/influencer/perfil">Editar perfil</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/influencer">Buscar marcas</NavDropdown.Item>
                    </NavDropdown>
                    <Button variant="outline-light" href="/" className="btn-nav-bar">Sair</Button>
                </Nav>
            </Navbar>

            <div className="content">
                <div className="">

                    <h1 className="search-marca mb-4">Minhas divulgações</h1>
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
                                        <h2 className="title">Moda e Cia</h2>
                                        <h3 className="description">Pagamento: R$50,00 + Produto</h3>
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
                                        <h3 className="description text-overflow">Calça diesel e camiseta para amostra</h3>
                                    </div>
                                </Col>

                            </div>

                            <div>

                            </div>

                        </section>
                    ))}
                </ul>
            </div >
        </div>





    );
};