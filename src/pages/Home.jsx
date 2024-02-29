import { useEffect } from "react";
import authService from '../../services/auth.service'
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
            <div className="container">
                <div>
                    <div className="btn-access">
                        <a href="/">
                            <img src="/logo.png" alt="Logo" />
                        </a>
                        <button onClick={sendGoogleReq}>
                            <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" />
                            Acessar com Google
                        </button>
                    </div>
                    <VersionApp />
                </div>
            </div>
        </HomeDetails>
    )
}

export default Home