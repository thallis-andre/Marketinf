import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col, Button, InputGroup, FormControl, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Collapse } from 'reactstrap';
import logoBSolo from "../../assets/LogoBrancasolo.svg";

import './empresa.css';


export default function Empresa() {

    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const toggle = () => setIsOpen(!isOpen);


    const [anuncios, setAnuncios] = useState([{}]);
    

    useEffect(() => {
        setAnuncios([
            {
                id: 1,
                marca: 'Thallis André',
                ig_empresa: '@Thallis-santo-andre',
                cidade: 'Gôiania',
                endereco: '',
                setor: '1529',
                isOpen,
            },
            {
                id: 2,
                marca: 'Breno Andrade',
                ig_empresa: '@Breno_h',
                cidade: 'Gôiania',
                endereco: '',
                setor: '5089',
            },
            {
                id: 3,
                marca: 'João Pedro Gama',
                ig_empresa: '@jp_gama_oficial',
                cidade: 'Gôiania',
                endereco: '',
                setor: '8775',
            },
            {
                id: 4,
                marca: 'Glauber',
                ig_empresa: '@glauber_violino',
                cidade: 'Gôiania',
                endereco: '',
                setor: '1888',
            },
        ]);
    }, []);


    return (

        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">
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
                        <NavDropdown.Item href="#">Editar perfil</NavDropdown.Item>
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
                                        <Collapse isOpen={anuncios.isOpen}>
                                            {/* <h3 className="description">Desejo que você
                                            Não tenha medo da vida, tenha medo de não vivê-la.
                                    Não há céu sem tempestades. Por isso, comi o cu de quem ta lendo</h3> */}
                                        </Collapse>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="cidade">
                                        <h2 className="title">{anuncios.cidade}</h2>
                                        <h3 className="description">{anuncios.endereco}</h3>
                                        <Collapse isOpen={anuncios.isOpen}>
                                            {/* <h3 className="description">Breno corno</h3> */}
                                        </Collapse>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="setor">
                                        <h2 className="title">Seguidores</h2>
                                        <h3 className="description">{anuncios.setor}</h3>
                                        <Collapse isOpen={anuncios.isOpen}>
                                            {/* <h3 className="description" >Só é corno quem é curioso</h3> */}
                                        </Collapse>
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