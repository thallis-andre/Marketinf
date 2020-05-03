import React from 'react';


import './cadastrar.css';
import logo from "../../assets/Group.svg";
import { Button } from 'reactstrap';
import { Row, Col, Form } from 'react-bootstrap';

export default function Cadastrar() {

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
                                <Form.Group>
                                    <Form.Label>Nome:</Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control type="email"/>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Senha:</Form.Label>
                                    <Form.Control type="password"/>
                                </Form.Group>
                                {['radio'].map((type) => (
                                    <div key={`checkbox`} className="mb-3">
                                        <Form.Check
                                            type="radio"
                                            label="Influenciador"
                                            name="checkbox"
                                            id="checkbox-influenciador"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="Loja"
                                            name="checkbox"
                                            id="checkbox-loja"
                                        />
                                    </div>
                                ))}
                                <Button color="primary" type="submit">
                                    Próximo
                                </Button>
                                
                            </Form>

                        </div>

                    </div>

                </Col>

            </Row>
        </div>
    );
}