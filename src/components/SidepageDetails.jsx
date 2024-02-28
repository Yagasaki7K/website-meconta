import styled from 'styled-components'

const SidepageDetails = styled.div`
    margin-left: 20rem;
    padding: 1rem 2rem;
    width: 65%;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 1024px) {
        margin-left: 0;
        width: 85%;
    }

    h4 {
        margin-top: 1rem;
        color: var(--green);
        font-size: 1.2rem;
    }

    h3 {
        .green {
            color: var(--green);
        }

        .red {
            color: var(--red);
        }
    }

    .debts {
        color: var(--red);
    }

    p {
        margin-bottom: 1rem;
        color: var(--gray);
    }

    hr {
        margin: 1rem 0;
        border: 1px solid var(--background-alt);
    }

    .select {
        display: flex;

        select, button {
            font-family: 'Poppins', sans-serif;
            border: none;
            border-radius: 5px;
            outline: none;
        }

        select {
            width: 100%;
            padding: 10px;
            background: var(--background-alt);
            color: var(--white);
            font-size: 14px;
            margin-bottom: 1rem;
        }

        button {
            font-size: 14px;
            height: 2.5rem;
            margin-left: 1rem;
            padding: 10px 20px;
            background: var(--green);
            color: var(--white);
            cursor: pointer;
            transition: background-color 0.3s ease;
            font-weight: bold;
            transition: 1s;

            &:hover {
                filter: brightness(80%);
            }
        }
    }
    
    .content-debts {
        display: flex;
        justify-content: space-around;

        .border {
            margin-top: 1rem;
            border: 1px solid var(--background-alt);
            width: 0.1px;
            border-radius: 5px;
        }

        p {
            margin: 0;
        }
    }
`

export default SidepageDetails