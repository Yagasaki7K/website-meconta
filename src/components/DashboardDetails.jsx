import styled from 'styled-components'

const DashboardDetails = styled.div`
    margin-left: 20rem;
    padding: 1rem 2rem;

    h4 {
        margin-top: 1rem;
    }

    .first-graph {
        margin-top: 1rem;
        margin-left: -1rem;
    }

    .content {
        position: fixed;
        z-index: 1;

        .advice {
            font-size: 0.8rem;
            color: var(--gray);
        }
    }
`

export default DashboardDetails