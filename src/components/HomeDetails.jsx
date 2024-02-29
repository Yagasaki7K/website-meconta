import styled from 'styled-components'

const HomeDetails = styled.div`
    background: url(https://github.com/Yagasaki7K/website-yagasaki/assets/23272064/0f030ec7-01f3-4f26-b592-b73a295a9e8b);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    overflow-y: hidden;

    .container {
        height: 100vh;
        width: 100vw;
        margin-top: 20rem;
        margin-left: 47rem;

        @media (max-width: 1366px) {
            margin-top: 13rem;
            margin-left: 30rem;
        }

        color: var(--white);

        div {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 25rem;
            padding: 2rem;
            border-radius: 15px;
            background: var(--background);
            color: var(--font);

            img {
                width: 22rem;
            }

            button {
                color: var(--white);
                margin-top: 1rem;
                background: var(--green);
                border-radius: 5px;
                border: none;
                padding: 0.7rem;
                font-size: 1rem;
                font-family: 'Poppins', sans-serif;
                text-transform: uppercase;
                cursor: pointer;
                
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;

                img {
                    width: 1rem;
                    margin-right: 0.5rem;
                }

                :hover {
                    opacity: 0.8;
                    transition: 1s;
                }
            }

            .btn-access {
                display: flex;
            }

            p {
                font-size: 0.8rem;
                color: var(--gray);
            }
        }
    }
`

export default HomeDetails