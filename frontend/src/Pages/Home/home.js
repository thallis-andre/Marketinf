import React from 'react';


import './home.css';
import logo from "../../assets/Group.svg";
import { Button } from 'reactstrap';
import { Row, Col } from 'react-bootstrap';

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
                            <Button color="secondary" href="/entrar">Entrar</Button><span> &nbsp; </span>
                            <Button color="secondary" href="/cadastrar">Cadastrar</Button>
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
        </div>
    );
}