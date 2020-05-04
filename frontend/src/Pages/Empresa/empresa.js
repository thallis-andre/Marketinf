import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import { Collapse } from 'reactstrap';

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
                marca: 'Nike',
                ig_empresa: '@NikeOficial',
                cidade: 'Gôiania',
                endereco: 'Shopping Flamboyant',
                setor: 'Roupas',
                isOpen,
            },
            {
                id: 2,
                marca: 'Pandora',
                ig_empresa: '@Pandora',
                cidade: 'Gôiania',
                endereco: 'Shopping Flamboyant',
                setor: 'Acessórios',
            },
            {
                id: 3,
                marca: 'M.A.C.',
                ig_empresa: '@M.A.C.',
                cidade: 'Gôiania',
                endereco: 'Shopping Flamboyant',
                setor: 'Beleza',
            },
            {
                id: 4,
                marca: 'Nike',
                ig_empresa: '@testetets',
                cidade: 'Gôiania',
                endereco: 'Shopping Flamboyant',
                setor: 'Roupas',
            },
        ]);
    }, []);


    return (

        <div className="content">

            <div className="">

                <h1 className="search-marca mb-4">Pesquisa marca:</h1>

                <InputGroup className="mb-3 search-input" size="lg" >
                    <FormControl
                        value={inputValue} onChange={event => setInputValue(event.target.value)}
                        placeholder="Digite uma marca..."
                    />
                    <InputGroup.Append>
                        <Button variant="primary">Pesquisar</Button>
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





    );
}