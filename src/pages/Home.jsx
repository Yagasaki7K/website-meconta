import { useEffect } from "react";
import authService from '../../services/auth.service'
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
            <div className="btn-access">
                <button onClick={sendGoogleReq}>
                    <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" />
                    Acessar com Google
                </button>
            </div>
        </HomeDetails>
    )
}

export default Home