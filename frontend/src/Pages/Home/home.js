import React from 'react';


import './home.css';
import logo from "../../assets/Group.svg"
    
    export default function Home(){

    return (
        <div className="container">
            <div className="logo">
                <img src={logo} alt="Marketinf, unindo marcas e influenciadores"></img>
            </div>
            <div className="azul">

                <div className="btn-group">
                    <div className="entrarbtn"><span className="entrarbtn-text">Entrar</span></div>
                    <div className="cadastrarbtn"><span className="cadastrarbtn-text">Cadastrar</span></div>
                </div>

                <div className="home-box">
                    <span className="home-title">Para empresas:</span>
                    <p className="home-p">Encontre um perfil de influenciador digital para divulgar os produtos da sua loja!</p>
                    <br/>
                    <span className="home-title">Para influenciadores:</span>
                    <p className="home-p">Encontre marcas para divulgar seus produtos em troca de benefícios!</p>
                </div>

            </div>
        </div>
    );
}