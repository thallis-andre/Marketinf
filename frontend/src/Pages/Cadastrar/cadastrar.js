import React, { useState } from 'react';


import './cadastrar.css';
import logo from "../../assets/Group.svg";
import { Button } from 'reactstrap';
import { Row, Col, Form } from 'react-bootstrap';

export default function Cadastrar() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    //FALTA RADIO

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
        alert(`Nome:${nome} E-mail:${email} Senha:${senha}`);
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
                            <Form onSubmit="registrar">
                                <Form.Group>
                                    <Form.Label>Nome:</Form.Label>
                                    <Form.Control type="text"/>

                                    <Form.Control type="text" value={nome} onChange={event => setNome(event.target.value)}/>

                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control type="email" value={email} onChange={event => setEmail(event.target.value)}/>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Senha:</Form.Label>
                                    <Form.Control type="password" value={senha} onChange={event => setSenha(event.target.value)}/>
                                </Form.Group>
                                {['radio'].map((type) => (
                                    <div key={`checkbox`} className="mb-3" >
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
                                <span> &nbsp; </span>
                                <Button color="primary" type="submit" onClick={chamarAlert}>
                                    .
                                </Button>
                                
                            </Form>


                        </div>

                    </div>

                </Col>

            </Row>
        </div>
    );
}