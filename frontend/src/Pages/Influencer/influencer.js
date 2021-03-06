import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col, Button, InputGroup, FormControl, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Collapse } from 'reactstrap';
import logoBSolo from "../../assets/LogoBrancasolo.svg";

import './influencer.css';


export default function Influencer() {

    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const toggle = () => setIsOpen(!isOpen);


    const [anuncios, setAnuncios] = useState([{}]);
    // const [anunciosFiltrados, setAnunciosFiltrados] = useState();
    const anunciosFiltrados = [];
    const anunciosTodos = anuncios;

    function teste(anuncios) {
        // setAnuncios({
        //     id: anuncios.id,
        //     marca: anuncios.marca,
        //     ig_influencer: anuncios.ig_influencer,
        //     cidade: anuncios.cidade,
        //     endereco: anuncios.endereco,
        //     setor: anuncios.setor,
        //     isOpen: !isOpen,
        // });

        console.log(anuncios);
    }


    function pesquisar() {


        // console.log(anunciosTodos);
        setAnuncios(anunciosTodos);


        anuncios.map((anuncios) => {
            if (anuncios.marca.toLowerCase() === inputValue.toLowerCase()) {
                anunciosFiltrados.push(anuncios);
                setAnuncios(anunciosFiltrados);

            } else {
                // setAnuncios(anuncios);
            }
        });


        // setAnuncios(anunciosFiltrados)
    }

    useEffect(() => {
        setAnuncios([
            {
                id: 1,
                marca: 'Nike',
                ig_influencer: '@NikeOficial',
                cidade: 'Gôiania',
                endereco: 'Shopping Flamboyant',
                setor: 'Roupas',
                isOpen,
            },
            {
                id: 2,
                marca: 'Pandora',
                ig_influencer: '@Pandora',
                cidade: 'Gôiania',
                endereco: 'Shopping Flamboyant',
                setor: 'Acessórios',
            },
            {
                id: 3,
                marca: 'M.A.C.',
                ig_influencer: '@M.A.C.',
                cidade: 'Gôiania',
                endereco: 'Shopping Flamboyant',
                setor: 'Beleza',
            },
            {
                id: 4,
                marca: 'Nike',
                ig_influencer: '@testetets',
                cidade: 'Gôiania',
                endereco: 'Shopping Flamboyant',
                setor: 'Roupas',
            },
        ]);
    }, []);


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
                        <NavDropdown.Item href="/influencer/perfil">Editar perfil</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/influencer/divulgacoes">Divulgações participadas</NavDropdown.Item>
                    </NavDropdown>
                    <Button variant="outline-light" href="/" className="btn-nav-bar">Sair</Button>
                </Nav>
            </Navbar>

            <div className="content">

                <div className="">

                    <h1 className="search-marca mb-4">Pesquisar marca:</h1>

                    <InputGroup className="mb-3 search-input input-procurar" size="lg" >
                        <FormControl
                            value={inputValue} onChange={event => setInputValue(event.target.value)}
                            placeholder="Digite uma marca..."
                        />
                        <InputGroup.Append>
                            <Button variant="primary" className="btn-procurar" onClick={pesquisar}>Pesquisar</Button>
                        </InputGroup.Append>
                    </InputGroup>

                    <div className="buttons-group">
                        <Button variant="primary" className="mr-5">Tudo</Button>
                        <Button variant="primary" className="mr-5">Roupa</Button>
                        <Button variant="primary" className="mr-5">Acessórios</Button>
                        <Button variant="primary">Beleza</Button>
                    </div>

                </div>
                <ul>

                    {anuncios.map(anuncios => (
                        <li className="influencer-list" key={anuncios.id} onClick={() => teste(anuncios)}>

                            <div className="circle"></div>
                            <div className="influencer">

                                <Col>
                                    <div className="foto"></div>
                                </Col>
                                <Col lg={4}>
                                    <div className="nome">
                                        <h2 className="title">{anuncios.marca}</h2>
                                        <h3 className="description">{anuncios.ig_influencer}</h3>
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
                                        <h2 className="title">Setor</h2>
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