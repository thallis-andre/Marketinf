import React from 'react';


import './home.css';
import logo from "../../assets/Group.svg";
import logoBSolo from "../../assets/LogoBrancasolo.svg";
import graficod from "../../assets/grafico_down.svg";
import { Button } from 'reactstrap';
import { Row, Col, Navbar } from 'react-bootstrap';

export default function Home() {

    return (
        <div className="bcontent">

            <Row className="justify-content-md-center">

                <Col>
                    <div className="logo">
                        <img src={logo} alt="Marketinf, unindo marcas e influenciadores"></img>
                        
                    </div>
                </Col>
                <Col>
                    <div className="azul">

                        <div className="btngroup">
                            <Button color="outline-light" href="/entrar">Entrar</Button><span> &nbsp; </span>
                            <Button color="outline-light" href="/cadastrar">Cadastrar</Button>
                        </div>

                        <div className="home-box">
                            <span className="home-title">Para empresas:</span>
                            <p className="home-p">Encontre um perfil de influenciador digital para divulgar os produtos da sua loja!</p>
                            <br />
                            <span className="home-title">Para influenciadores:</span>
                            <p className="home-p">Encontre marcas para divulgar seus produtos em troca de benefícios!</p>
                        </div>

                    </div>

                </Col>

            </Row>

            <Row className="text-video">
                <span>Nossa plataforma</span>
            </Row>

            <Row className="content-video">
                <iframe width="967" height="544" src="https://www.youtube.com/embed/Mxesac55Puo"
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen title="yt-video"></iframe>

            </Row>

            <Row className="justify-content-md-center content2">

                <Col>
                    <span className="title-grafico-d">Lorem Ipsum</span>
                    <div className="text-grafico-d">
                    O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.
                    O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500,
                    quando uma misturou os caracteres de um texto para criar um espécime de livro.
                    </div>
                    <Button color="primary" size="lg" className="text-grafico-d" href="/cadastrar">Cadastrar</Button>
                                        
                </Col>
                <Col>
                    <div>
                        <img src={graficod} alt="Queda nas vendas" className="grafico-d"></img>

                    </div>
                </Col>

            </Row>


            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/" bg="light">
                <img
                    alt="."
                    src={logoBSolo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                Marketinf
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Desenvolvido por <a href="https://github.com/BrenoHA" target="blank">Breno Hasparyk</a>,
                        <a href="https://github.com/Jpedrogama" target="blank"> João Pedro Gama</a> e
                        <a href="https://github.com/thallis-andre" target="blank"> Thallis André</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>


        </div>
    );
}