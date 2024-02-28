import { useEffect, useState } from "react";
import Navigation from "../components/Navigation"
import authService from "../../services/auth.service";

const SignUpCategories = () => {
    const [render, setRender] = useState(false)

    async function checkAuth() {
        return await authService.stateAuthentication();
    }

    function SignOut() {
        return authService.signOutGoogle();
    }

    useEffect(() => {
        checkAuth()
            .then(() => {
                authService.stateAuthentication()
                    .then((result) => {
                        if (result) {
                            setRender(true)
                        } else {
                            SignOut();
                            window.location.href = "/"
                        }
                    });
            })
            .catch(() => {
                window.location.href = "/"
            });
    }, []);

    if (render) {
        return (
            <div>
                <Navigation />
            </div>
        )
    }
}

export default SignUpCategories