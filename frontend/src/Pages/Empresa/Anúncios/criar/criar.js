import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col, Button, InputGroup, FormControl, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Collapse } from 'reactstrap';
import logoBSolo from "../../../../assets/LogoBrancasolo.svg";

import './criar.css';

export default function criarAnuncio() {

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
                        <NavDropdown.Item href="/empresa/anuncios">Ver anúncios</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/empresa">Divulgações participadas</NavDropdown.Item>
                    </NavDropdown>
                    <Button variant="outline-light" href="/" className="btn-nav-bar">Sair</Button>
                </Nav>
            </Navbar>

            <div className="criar-anuncio">



                <h1 className="titulo-page">Criar anúncio</h1>



                <Row className="input-group-novo-anuncio justify-content-md-center" >

                    <div className="tamanho-input-group">

                        <InputGroup size="lg">
                            <span className="label-anuncio">
                                Pagamento:
                            </span>
                            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                        </InputGroup>
                        <InputGroup size="lg" className="margin-input-novo-anuncio">
                            <span className="label-anuncio">
                                Seguidores:
                            </span>
                            <p className="observacao">
                                Quantidade mínima exigida que o influencer deve ter para divulgar sua marca
                            </p>
                            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                        </InputGroup>

                        <InputGroup className="margin-input-novo-anuncio textarea-altura">
                            <span className="label-anuncio span-textarea">
                                Descrição:
                            </span>
                            <FormControl as="textarea" aria-label="With textarea" />
                        </InputGroup>

                        <InputGroup className="margin-input-novo-anuncio " size="lg" >
                            <span className="label-anuncio width-anexar">
                                Produto:
                            </span>
                            <FormControl
                                placeholder="Adicionar foto do produto" />
                            <InputGroup.Append>
                                <Button variant="primary" className="btn-procurar">Anexar</Button>
                            </InputGroup.Append>
                        </InputGroup>

                    </div>
                </Row>

            </div>

            <Button variant="primary" className="button-criar">Criar</Button>{' '}

        </div>




    );
}