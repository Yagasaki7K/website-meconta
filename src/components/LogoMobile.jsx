import styled from "styled-components"

const LogoMobile = () => {
    return (
        <LogoMobileDetails>
            <div className="logo">
                <a href="/"><img src="/logo.png" alt="MeConta Logo" /></a>
            </div>
        </LogoMobileDetails>
    )
}

const LogoMobileDetails = styled.div`
    .logo {
        display: none;

        @media (max-width: 1024px) {
            display: block;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin-bottom: 1rem;

            img {
                width: 15rem;
            }
        }
    }

`

export default LogoMobile