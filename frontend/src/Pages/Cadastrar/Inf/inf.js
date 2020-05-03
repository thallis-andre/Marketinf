import React from 'react';


import '../cadastrar.css';
import logo from "../../../assets/Group.svg";
import { Button } from 'reactstrap';
import { Row, Col, Form, InputGroup, FormControl } from 'react-bootstrap';

export default function Inf() {

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
                            <label>Usuário do instagram:</label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <label>Sexo:</label>
                                {['radio'].map((type) => (
                                    <div key={`checkbox-sex`} className="mb-3">
                                        <Form.Check
                                            type="radio"
                                            label="Masculino"
                                            name="checkbox-sex"
                                            id="checkbox-masc"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="Feminino"
                                            name="checkbox-sex"
                                            id="checkbox-fem"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="Outro"
                                            name="checkbox-sex"
                                            id="checkbox-outro"
                                        />
                                    </div>
                                ))}
                                <Form.Group>
                                    <Form.Label>Cidade:</Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Digite uma descrição sobre você</Form.Label>
                                    <Form.Control as="textarea" rows="3" />
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