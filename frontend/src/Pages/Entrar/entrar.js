import React from 'react';


import './entrar.css';
import logo from "../../assets/Group.svg";
import { Button } from 'reactstrap';
import { Row, Col, Form } from 'react-bootstrap';

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

                    <div className="btngroup">
                            <Button color="secondary" href="/entrar">Entrar</Button><span> &nbsp; </span>
                            <Button color="secondary" href="/cadastrar">Cadastrar</Button>
                        </div>

                        <div className="login-area">
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control type="email"/>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Senha:</Form.Label>
                                    <Form.Control type="password"/>
                                </Form.Group>
                                <Button color="primary" type="submit">
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