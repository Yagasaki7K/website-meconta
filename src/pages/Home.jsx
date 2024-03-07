import { useEffect } from "react";
import authService from '../services/auth.service'
import HomeDetails from '../components/HomeDetails'
import VersionApp from "../components/VersionApp";

const Home = () => {
    useEffect(() => {
        checkAuth().then(() => {
            window.location.href = '/dashboard'
        });
    }, []);

    async function checkAuth() {
        return await authService.stateAuthentication();
    }

    function sendGoogleReq() {
        return authService.signInGoogle()
    }

    return (
        <HomeDetails>
            <div className="content">
                <div className="navigation">
                    <ul>
                        <li><a href="/">Início</a></li>
                        <li><a href="/duvidas">Dúvidas</a></li>
                        <li><a href="/"><img src="/logo-white.png" alt="MeConta Logo" /></a></li>
                        <li><a href="/#prices">Preços</a></li>
                        <li><a href="https://kalify.vercel.app/#contact" target="_blank" rel="noreferrer">Empresas</a></li>
                    </ul>
                </div>

                <h1>Controle seus gastos <br /> de maneira simples</h1>

                <p className="subTitle">
                    Com o <span>MeConta</span> você não precisa se preocupar com bancos ou anúncios. <br />
                    Faça a gestão do seu dinheiro do seu jeito.
                </p>

                <button onClick={sendGoogleReq}>
                    <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" />
                    Acessar com Google
                </button>

                <VersionApp />
            </div>

            {/* <div className="prices" id="prices">
                <h1>Preços</h1>

                <p>Já pensou em aprimorar ainda mais sua gestão financeira? Com relatórios completos à sua disposição, uma ampla gama de funcionalidades, suporte imediato e, é claro, a liberdade para sugerir melhorias e aproveitar seus benefícios. <br /> O <span>MeConta</span> torna tudo isso possível através do nosso Plano Premium.</p>

                <h1>Vantagens do Plano Premium</h1>

                <ul>
                    <li>&#10003; Download de Relatórios (PDF)</li>
                    <li>&#10003; Suporte Imediato via WhatsApp</li>
                    <li>&#10003; Tema Claro Disponível!</li>
                </ul>
            </div> */}

            <div className="copyright">
                <p>Copyright © 2024 MeConta by Kindred Software</p>
            </div>
        </HomeDetails>
    )
}

export default Home