
import React, { useState }  from 'react';


import '../cadastrar.css';
import logo from "../../../assets/Group.svg";
import { Button } from 'reactstrap';
import { Row, Col, Form, InputGroup, FormControl } from 'react-bootstrap';

export default function Loja() {

    const [userig, setUserig] = useState('');
    const [site, setSite] = useState('');
    const [cidade, setCidade] = useState('');
    //FALTA SELECT

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
        alert(`Nome:${userig} E-mail:${site} Senha:${cidade}`);
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

                                        value={userig} onChange={event => setUserig(event.target.value)}
                                    />
                                </InputGroup>
                                <Form.Group>
                                    <Form.Label>Site:</Form.Label>
                                    <Form.Control type="text" value={site} onChange={event => setSite(event.target.value)}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Cidade:</Form.Label>
                                    <Form.Control type="text" value={cidade} onChange={event => setCidade(event.target.value)}/>

                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Selecione o setor da sua loja:</Form.Label>
                                    <Form.Control as="select">
                                        <option>Roupas</option>
                                        <option>Acessórios</option>
                                        <option>Beleza</option>
                                        <option>Outro</option>
                                    </Form.Control>
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

                </Col>

            </Row>
        </div>
    );
}