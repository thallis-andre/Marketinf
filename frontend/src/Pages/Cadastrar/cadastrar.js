import React, { useState } from 'react';


import './cadastrar.css';
import logo from "../../assets/Group.svg";
import logoBSolo from "../../assets/LogoBrancasolo.svg";
import graficod from "../../assets/grafico_down.svg";
import { Button } from 'reactstrap';
import { Row, Col, Form, Navbar } from 'react-bootstrap';

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
                                    <Form.Group>
                                        <Form.Label>Nome:</Form.Label>
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
                <iframe width="967" height="544" src="https://www.youtube.com/embed/SlGF_ubIVWM"
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen title="yt-video-marketinf">
                </iframe>

            </Row>

            <Row className="justify-content-md-center content2">

                <Col>
                    <span className="title-grafico-d">Quem somos</span>
                    <div className="text-grafico-d">
                    Somos uma plataforma que na era da ascensão digital visa dar voz e visibilidade aos micro e pequenos empresários,
                    que movem a economia do país, e aos influenciadores que representam um contato com a população que ainda não teve seu potencial aproveitado.
                    Juntos, através da Marketinf, seremos capazes de unir as duas partes possibilitando uma relação mutualística que dará resultados incríveis.
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