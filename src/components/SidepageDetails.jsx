import styled from 'styled-components'

const SidepageDetails = styled.div`
    margin-left: 20rem;
    padding: 1rem 2rem;
    width: 50%;

    @media (max-width: 1024px) {
        margin-left: 0;
        width: 85%;
    }

    h4 {
        margin-top: 1rem;
        color: var(--green);
        font-size: 1.2rem;
    }

    p {
        margin-bottom: 1rem;
        color: var(--gray);
    }
`

export default SidepageDetails