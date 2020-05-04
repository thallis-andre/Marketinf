import React, { useState } from 'react';


import '../cadastrar.css';
import logo from "../../../assets/Group.svg";
import logoBSolo from "../../../assets/LogoBrancasolo.svg";
import graficod from "../../../assets/grafico_down.svg";
import { Button } from 'reactstrap';
import { Row, Col, Form, InputGroup, FormControl, Navbar } from 'react-bootstrap';

export default function Inf() {

    const [userig, setUserig] = useState('');
    const [cidade, setCidade] = useState('');
    const [descricao, setDescricao] = useState('');
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
        alert(`Nome:${userig} E-mail:${cidade} Senha:${descricao}`);
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
                            <Button color="outline-light" href="/entrar">Entrar</Button><span> &nbsp; </span>
                            <Button color="outline-light" href="/cadastrar">Cadastrar</Button>
                        </div>

                        <div className="login-area">
                            <div className="form-area">
                                    
                                <Button outline color="secondary" href="/">Voltar</Button>
                                <Form onSubmit="registrar">
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
                                    <label>Sexo:</label>
                                    {['radio'].map((type) => (
                                        <div key={`inline-checkbox-sex`} className="mb-3">
                                            <Form.Check
                                                type="radio"
                                                inline
                                                label="Masculino"
                                                name="checkbox-sex"
                                                id="checkbox-masc"
                                            />
                                            <Form.Check
                                                type="radio"
                                                inline
                                                label="Feminino"
                                                name="checkbox-sex"
                                                id="checkbox-fem"
                                            />
                                            <Form.Check
                                                type="radio"
                                                inline
                                                label="Outro"
                                                name="checkbox-sex"
                                                id="checkbox-outro"
                                            />
                                        </div>
                                    ))}
                                    <Form.Group>
                                        <Form.Label>Cidade:</Form.Label>
                                        <Form.Control type="text" value={cidade} onChange={event => setCidade(event.target.value)}/>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Digite uma descrição sobre você</Form.Label>
                                        <Form.Control as="textarea" rows="3" value={descricao} onChange={event => setDescricao(event.target.value)}/>
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