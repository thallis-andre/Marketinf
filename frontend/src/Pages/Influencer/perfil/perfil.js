import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col, Button, InputGroup, FormControl, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Collapse } from 'reactstrap';
import logoBSolo from "../../../assets/LogoBrancasolo.svg";
import User from "../../../assets/User.svg";
import Salvar from "../../../assets/salvar.svg";
import Cancelar from "../../../assets/cancelar.svg";

import './perfil.css';


export default function PerfilInfluencer() {


    return (

        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/influencer">
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
                        <NavDropdown.Item href="/influencer">Ver anúncios</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">Divulgações participadas</NavDropdown.Item>
                    </NavDropdown>
                    <Button variant="outline-light" href="/" className="btn-nav-bar">Sair</Button>
                </Nav>
            </Navbar>

            <div className="editar-influencer">



                <Row>

                    <div className="conteiner-photo mr-4 pl-3" >
                        <img src={User} className="mb-3" />
                        <span>Alterar foto de perfil</span>
                    </div>
                    <Col >
                        <label htmlFor="nome" className="label-perfil">Nome:</label>
                        <input id="nome" type="text" className="input-perfil" autocomplete="off" />
                        <label htmlFor="nome" className="label-perfil mt-5">Usuário do instagram:</label>
                        <input id="nome" type="text" className="input-perfil" autocomplete="off" />
                        <label htmlFor="nome" className="label-perfil mt-5">Descrição pessoal:</label>
                        <div className="input-ig">
                            <div className="arroba-ig">
                            </div>
                            <input id="nome" type="text" className="input-perfil" autocomplete="off" />
                        </div>
                    </Col>

                </Row>


                <Row className="input-group-perfil">
                    <Col className="margin-input-group">
                        <label htmlFor="nome" className="label-perfil">Cidade:</label>
                        <input id="nome" type="text" className="input-perfil" autocomplete="off" />
                        <label htmlFor="nome" className="label-perfil mt-5">Sexo:</label>
                        <select className="input-perfil">
                            <option value="null"></option>
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminio</option>
                        </select>
                    </Col>

                    <Col>
                        <label htmlFor="nome" className="label-perfil">Endereço de Email:</label>
                        <input id="nome" type="text" className="input-perfil" autocomplete="off" />
                        <label htmlFor="nome" className="label-perfil mt-5">Telefone:</label>
                        <input id="nome" type="text" className="input-perfil" autocomplete="off" />
                    </Col>
                </Row>


            </div>

            <Navbar bg="dark" variant="dark" className="footer-perfil">
                    <Navbar.Brand bg="light">
                    Salvar
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <img src={Salvar} className="icon-pointer mr-3"/>
                        <img src={Cancelar} className="icon-pointer"/>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>

        </div>




    );
}