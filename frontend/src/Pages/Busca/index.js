import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Collapse } from 'reactstrap';

import './styles.css';


export default function Influencer() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [anuncios, setAnuncios] = useState([1, 2, 3, 4, 5, 6]);



    return (

        <div className="content">

            <div className="header">
                <Row className="row-header justify-content-md-center">
                    <Col lg={4}>
                        <div className="title">
                            <h1 className="search-marca">Pesquisa marca:</h1>
                            <h3 className="results">150 resultados</h3>
                        </div>
                    </Col>

                    <Col lg={8}>


                        <div className="search">
                            <input className="search-input" type="text" />
                            <Row className="justify-content-md-center">
                                {/* <div className="all-filters"></div> */}
                                <Col>
                                    <div className="filter"><span className="title-filter">Tudo</span></div>
                                </Col>
                                <Col>
                                    <div className="filter"><span className="title-filter">Roupas</span></div>
                                </Col>
                                <Col>
                                    <div className="filter"><span className="title-filter">Acessórios</span></div>
                                </Col>
                                <Col>
                                    <div className="filter"><span className="title-filter">Beleza</span></div>

                                </Col>
                            </Row>
                        </div>
                    </Col>


                </Row>
            </div>
            <ul>

                {anuncios.map(anuncios => (
                    <section className="empresa-list" onClick={toggle}>

                        <div className="circle"></div>
                        <div className="empresa">



                            <Col>
                                <div className="foto"></div>
                            </Col>
                            <Col lg={4}>
                                <div className="nome">
                                    <h2 className="title">Nome da empresa</h2>
                                    <h3 className="description">@ig_empresa</h3>
                                    <Collapse isOpen={isOpen}>
                                        <h3 className="description">Desejo que você
                                        Não tenha medo da vida, tenha medo de não vivê-la.
                                Não há céu sem tempestades. Por isso, comi o cu de quem ta lendo</h3>
                                    </Collapse>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className="cidade">
                                    <h2 className="title">Cidade</h2>
                                    <h3 className="description">Endereço</h3>
                                    <Collapse isOpen={isOpen}>
                                        <h3 className="description">Breno corno</h3>
                                        <h3 className="description">João comedor de casadas</h3>
                                    </Collapse>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className="setor">
                                    <h2 className="title">Setor</h2>
                                    <h3 className="description">Beleza</h3>
                                    <Collapse isOpen={isOpen}>
                                        <h3 className="description" >Só é corno quem é curioso</h3>
                                    </Collapse>
                                </div>
                            </Col>


                        </div>



                    </section>
                ))}
            </ul>
        </div >





    );
}