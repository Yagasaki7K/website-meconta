import styled from 'styled-components'

const DashboardDetails = styled.div`
    margin-left: 20rem;
    padding: 1rem 2rem;

    @media (max-width: 1024px) {
        margin-left: 0;
    }

    h4 {
        margin-top: 1rem;
        
        .receitas {
            color: var(--green);
        }

        .despesas {
            color: var(--red);
        }
    }

    .despesas {
        margin-top: -0.3rem;

        @media (max-width: 1024px) {
            margin-top: 0;
        }
    }

    .mobile {
        display: none;

        @media (max-width: 400px) {
            .helpMe {
                display: none
            }
        }

        @media (max-width: 1024px) {
            display: block;
            width: 90%;
            font-size: 0.9rem;
            margin-top: 1rem;
            color:var(--gray);

            p {
                margin-bottom: 1rem;
            }

            a {
                color: var(--purple);
            }

            .buttons {
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                margin-top: 2rem;

                @media (max-width: 400px) {
                    display: none
                }

                .despesa {
                    background: var(--red);
                    margin-left: 1rem;
                }

                .receita {
                    background: var(--green);
                }

                .button {
                    width: 6rem;
                    color: var(--white);
                    border-radius: 5px;
                    border: none;
                    padding: 0.7rem;
                    font-size: 1rem;
                    font-family: 'Poppins', sans-serif;
                    text-transform: uppercase;
                    cursor: pointer;
                    transition: background-color 0.5s;
                    text-decoration: none;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

                    &:hover {
                        filter: brightness(80%);
                    }   
                }

                .mobile {
                    margin-bottom: 3rem;
                }
            }
        }
    }

    .first-graph {
        margin-top: 1rem;
        margin-left: -1rem;
    }

    .graphs {
        @media (max-width: 1024px) {
            display: none;
        }
    }

    .content {
        position: fixed;
        z-index: 1;
        
        @media (max-width: 1024px) {
            display: flex;
            flex-direction: column;
            
        }

        .advice {   
            font-size: 0.8rem;
            color: var(--gray);
        }

        .welcome {
            width: 90%;
        }
    }
`

export default DashboardDetails