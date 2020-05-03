import React, { useState } from 'react';


import './entrar.css';
import logo from "../../assets/Group.svg";
import { Button } from 'reactstrap';
import { Row, Col, Form } from 'react-bootstrap';

export default function Entrar() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    /*
    async function registrar(event) {
        const data = {
            nome,
            email,
            senha,
        }

    }
    */

    const chamarAlert = () => {
        alert(`E-mail:${email} Senha:${senha}`);
    }

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
                            <div className="form-area-entrar">
                                    
                                <Button outline color="secondary" href="/">Voltar</Button><br/><br/><br/>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email:</Form.Label>
                                        <Form.Control type="email" value={email} onChange={event => setEmail(event.target.value)}/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Senha:</Form.Label>
                                        <Form.Control type="password" value={senha} onChange={event => setSenha(event.target.value)}/>
                                    </Form.Group>
                                    <Button color="primary" type="submit">
                                        Entrar
                                    </Button>
                                    <span> &nbsp; </span>
                                    <Button color="primary" type="submit" onClick={chamarAlert}>
                                        .
                                    </Button>
                                </Form>
                            </div>

                        </div>

                    </div>

                </Col>

            </Row>
        </div>
    );
}