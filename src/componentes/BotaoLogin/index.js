import './BotaoLogin.css'
import webRequest from './../WebRequest/webRequest.js';
import { useState } from 'react';


const BotaoLogin = () => {

    const [dadosLogin, setDadosLogin] = useState(null);

    const handleBotao = () => {
        
    }

    
    return (
        <div className='botaoLogin' >
            <button onClick={handleBotao}>Entrar</button>
        </div>
    )
}

export default BotaoLogin;