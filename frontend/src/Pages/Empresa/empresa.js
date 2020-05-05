import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col, Button, InputGroup, FormControl, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Collapse } from 'reactstrap';
import logoBSolo from "../../assets/LogoBrancasolo.svg";

import './empresa.css';


export default function Empresa() {

    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const [dados, setDados] = useState({
        id: 1,
        marca: 'Thallis André',
        ig_empresa: '@Thallis-santo-andre',
        cidade: 'Gôiania',
        endereco: '',
        setor: '9751',
        isOpen: false,
    });

    const [anuncios, setAnuncios] = useState([
        {
            id: 1,
            marca: 'Thallis André',
            ig_empresa: '@Thallis-santo-andre',
            cidade: 'Gôiania',
            endereco: '',
            setor: '9751',
            isOpen: false,
        },
        {
            id: 2,
            marca: 'Breno Andrade',
            ig_empresa: '@Breno_h',
            cidade: 'Gôiania',
            endereco: '',
            setor: '5089',
            isOpen: false,

        },
        {
            id: 3,
            marca: 'João Pedro Gama',
            ig_empresa: '@jp_gama_oficial',
            cidade: 'Gôiania',
            endereco: '',
            setor: '8775',
            isOpen: false,

        },
        {
            id: 4,
            marca: 'Glauber',
            ig_empresa: '@glauber_violino',
            cidade: 'Gôiania',
            endereco: '',
            setor: '1888',
            isOpen: false,

        },
    ]);


    const toggle = () => setIsOpen(!isOpen);


    // function toggle(index) {
    //     let teste = anuncios[index - 1];
    //     teste.isOpen = true;
    //     setAnuncios({ ...anuncios, ...teste });
    //     console.log(anuncios);
    // };

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
                        <NavDropdown.Item href="/empresa/perfil">Editar perfil</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/empresa/anuncios">Meus Anuncios</NavDropdown.Item>
                    </NavDropdown>
                    <Button variant="outline-light" href="/" className="btn-nav-bar">Sair</Button>
                </Nav>
            </Navbar>

            <div className="content">


                <div className="">

                    <h1 className="search-marca mb-4">Pesquisar influenciador:</h1>

                    <InputGroup className="mb-3 search-input input-procurar" size="lg" >
                        <FormControl
                            value={inputValue} onChange={event => setInputValue(event.target.value)}
                            placeholder="Digite uma marca..."
                        />
                        <InputGroup.Append>
                            <Button variant="primary" className="btn-procurar">Pesquisar</Button>
                        </InputGroup.Append>
                    </InputGroup>

                    <div className="buttons-group">
                        <Button variant="primary" className="mr-5">Mais seguidores</Button>
                        <Button variant="primary" className="mr-5">Menos seguidores</Button>
                    </div>

                </div>
                <ul>

                    {anuncios.map(anuncios => (
                        <li className="empresa-list" key={anuncios.id}>
                            <div className="circle"></div>
                            <div className="empresa">
                                <Col>
                                    <div className="foto"></div>
                                </Col>
                                <Col lg={4}>
                                    <div className="nome">
                                        <h2 className="title">{anuncios.marca}</h2>
                                        <h3 className="description">{anuncios.ig_empresa}</h3>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="cidade">
                                        <h2 className="title">{anuncios.cidade}</h2>
                                        <h3 className="description">{anuncios.endereco}</h3>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="setor">
                                        <h2 className="title">Seguidores</h2>
                                        <h3 className="description">{anuncios.setor}</h3>
                                    </div>
                                </Col>


                            </div>
                        </li>
                    ))}
                </ul>
            </div >

        </div>



    );
}