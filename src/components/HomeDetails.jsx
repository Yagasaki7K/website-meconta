import styled from 'styled-components'

const HomeDetails = styled.div`
    background: rgb(55,106,76);
    background: linear-gradient(90deg, rgba(55,106,76,1) 0%, rgba(145,195,167,1) 100%);
    height: 100vh;
    /* height: 100%; */
    color: var(--white);

    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        color: var(--white);
        padding: 3rem 0;

        img {
            width: 15rem;
        }

        .navigation {
            margin-left: 1rem;

            ul {
                list-style: none;
                padding: 0;
                margin: 0;

                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                flex-direction: row;

                li {
                    margin: 0 3rem;

                    a {
                        text-decoration: none;
                        color: var(--white);

                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
            }
        }

        h1 {
            margin: 8rem 0 2rem 0;
            font-size: 4.5rem;
            line-height: 5rem;

            @media (max-width: 768px) {
                font-size: 3rem;
                line-height: 3.5rem;
                width: 80%;
                margin: 2rem 0 1rem 0;
            }
        }

        .subTitle {
            font-size: 1.2rem;
            color: var(--white);
            margin-bottom: 3rem;

            @media (max-width: 768px) {
                font-size: 1rem;
                width: 80%;
            }

            span {
                color: var(--green);
            }
        }

        button {
            color: var(--white);
            background: var(--green);
            
            border-radius: 50px;
            border: none;
            padding: 1rem;
            font-size: 1rem;
            font-family: 'Poppins', sans-serif;
            cursor: pointer;
            
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;

            img {
                width: 1rem;
                margin-right: 0.5rem;
            }

            &:hover {
                opacity: 0.8;
                transition: 2s;
                background: #1c3912;
            }
        }

        .version {
            font-size: 0.8rem;
            margin-top: 0.2rem;
            color: var(--gray);
        }
    }

    .prices {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        margin-top: 22rem;
        padding-bottom: 2rem;

        p {
            margin: 2rem 0;
            width: 50%;

            span {
                color: var(--green);
            }
        }

        li {
            list-style: none;
        }
    }

    .copyright {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        padding-bottom: 1rem;
        font-size: 1rem;
    }
`

export default HomeDetails