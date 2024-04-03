import './Banner.css'
import ImagemBanner from '../../imagens/logo-banner-menor.png'
import BotaoLogin from '../BotaoLogin'

export const Banner = () => {
    // JSX
    return (
        <header className="header">
            <div className="logo">
                <img src={ImagemBanner} alt="logo"></img>
            </div>
            <nav className="menu">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#contato">Contato</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
            <div className="login">
            <BotaoLogin/>
  </div>            
        </header>
    )
}