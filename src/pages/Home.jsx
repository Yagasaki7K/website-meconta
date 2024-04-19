import { useEffect } from "react";
import authService from '../services/auth.service'
import HomeDetails from '../components/HomeDetails'

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
                        <li className="title">meconta.</li>
                        <li><a href="/duvidas">Benefícios</a></li>
                        <li><a href="/ajuda">Conta Digital</a></li>
                        <li><a href="/ajuda">Suporte</a></li>
                        <li className="signInButton" onClick={sendGoogleReq}>Entrar</li>
                        <li className="signUpButton"><a onClick={sendGoogleReq}>Abrir conta</a></li>
                    </ul>
                </div>

                <div className="apresentation">
                    <div className="leftContent">
                        <h1>MeConta <br /> sua carteira digital.</h1>
                        <p>Com MeConta, você pode controlar seus gastos, transferências e recebimentos com zero taxa ou mensalidade.</p>

                        <div className="leftCheck">
                            <ul>
                                <li><i className="uil uil-check-circle" /> Anotação Instantânea</li>
                                <li><i className="uil uil-check-circle" /> Segurança pela Google</li>
                            </ul>
                            <ul>
                                <li><i className="uil uil-check-circle" /> Totalmente gratuito</li>
                                <li><i className="uil uil-check-circle" /> Focado no cotidiano</li>
                            </ul>
                        </div>

                        <button className="signUpButton" onClick={sendGoogleReq}>Abrir uma conta <i className="uil uil-arrow-right" /></button>
                    </div>
                    <div className="rightContent">
                        <img src="https://cdn-icons-png.flaticon.com/512/218/218390.png" alt="" />
                    </div>
                </div>
            </div>
        </HomeDetails>
    )
}

export default Home