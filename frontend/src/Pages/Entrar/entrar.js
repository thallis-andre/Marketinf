import React from 'react';


import './entrar.css';
import logo from "../../assets/Group.svg";
import { Row, Col, Form, Button } from 'react-bootstrap';

export default function Entrar() {

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

                        <div className="btn-group">
                            <div className="entrarbtn"><span className="entrarbtn-text">Entrar</span></div>
                            <div className="cadastrarbtn"><span className="cadastrarbtn-text">Cadastrar</span></div>
                        </div>

                        <div className="login-area">
                            <Form>
                                <Form.Group>
                                    <Form.Label>Usuário:</Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Senha:</Form.Label>
                                    <Form.Control type="password"/>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Entrar
                                </Button>
                            </Form>

                        </div>

                    </div>

                </Col>

            </Row>
        </div>
    );
}