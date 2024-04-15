import styled from 'styled-components'

const HomeDetails = styled.div`

    .content {
        display: flex;
        flex-direction: column;
        font-family: "DM Sans", sans-serif;
        
        .navigation {
            @media (max-width: 768px) {
                display: none;
            }

            ul {
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                margin-top: 2rem;

                li {
                    list-style: none;
                    font-size: 1.2rem;
                    padding: 0 1.5rem;

                    @media (max-width: 768px) {
                        margin-bottom: 1rem;
                    }

                    a {
                        text-decoration: none;
                        color: var(--black);
                        font-weight: 500;

                        &:hover {
                            color: var(--green);
                        }
                    }
                }

                .title {
                    color: var(--green);
                    font-weight: 500;
                    font-size: 2.2rem;
                    margin-right: 10rem;

                    @media (max-width: 1024px) {
                        margin-right: 2rem;
                    }

                    @media (max-width: 768px) {
                        margin: 0;
                    }

                    cursor: pointer;
                }

                .signInButton {
                    color: var(--green);
                    margin-left: 10rem;

                    @media (max-width: 1024px) {
                        margin-left: 2rem;
                    }

                    @media (max-width: 768px) {
                        display: none;
                    }

                    margin-right: 1rem;
                    cursor: pointer;
                }

                .signUpButton {
                    background: var(--green);
                    padding: 0.5rem 1.5rem;
                    border-radius: 5px;
                    color: #fff;
                    text-decoration: none;

                    &:hover {
                        filter: brightness(80%);
                    }

                    a {
                        color: #fff;
                    }

                    @media (max-width: 768px) {
                        margin: 0rem;
                    }
                }
            }
        }

        .apresentation {
            margin-top: 8rem;
            padding: 2rem 22.5rem;
            color: var(--black);
            display: flex;

            @media (max-width: 1680px) {
                padding: 2rem 15rem;
            }

            @media (max-width: 1440px) {
                padding: 2rem 10rem;
            }

            @media (max-width: 1366px) {
                padding: 2rem 8rem;
            }

            @media (max-width: 1024px) {
                margin-top: 4rem;
                padding: 2rem 5rem;
            }

            @media (max-width: 768px) {
                padding: 0rem 2rem 2rem 2rem;
            }

            .leftContent {
                width: 45rem;

                h1 {
                    font-size: 5.2rem;
                    line-height: 5rem;

                    @media (max-width: 768px) {
                        color: var(--green);
                        font-size: 5rem;
                    }
                }

                p {
                    margin-top: 2rem;
                    font-size: 1.5rem;
                }

                button {
                    background: var(--green);
                    color: #fff;
                    padding: 1rem 2.5rem;
                    border-radius: 5px;
                    font-size: 1.5rem;
                    margin-top: 2rem;
                    cursor: pointer;
                    border: none;

                    &:hover {
                        filter: brightness(80%);
                    }
                }

                .leftCheck {
                    display: flex;
                    margin-top: 2rem;

                    ul {
                        list-style: none;
                        margin-right: 5dvh;
                        font-size: 1.3rem;

                        li {
                            margin: 1rem 0;

                            i {
                                color: var(--green);
                                margin-right: 1rem;
                            }
                        }
                    }
                }
            }

            .rightContent {
                @media (max-width: 1024px) {
                    display: none;
                }
            }
        }
    }
`

export default HomeDetails