import styled from "styled-components";

const ModalDetails = styled.div`
    background: var(--background);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 14.9rem;
    padding-bottom: 14.9rem;
    overflow: hidden;

    @media (max-width: 1024px) {
        padding-top: 5rem;
    }

    .modal-content {
        background: var(--background-alt);
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        overflow-y: auto;
        display: flex;
        justify-content: center;
        align-items: left;
        text-align: left;

        @media (max-width: 1024px) {
            text-align: center;
        }

        flex-direction: column;

        .less {
            color: var(--red);
        }

        .plus {
            color: var(--green);
        }

        h3 {
            font-size: 1.8rem;
        }

        i {
            font-size: 0.8rem;
            color: var(--gray);
        }

        label {
            margin-top: 1rem;
        }

        input, select, input {
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
            padding: 6px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            border-radius: 5px;
            outline: none;
            transition: border-color 0.3s ease;
            background: var(--background);
            color: var(--white);
        }

        input:focus, select:focus, input[type="date"]:focus {
            border: 1px solid rgba(0, 0, 0, 0.2);
        }

        input.error, select.error, input[type="date"].error {
            border-color: var(--red);
        }

        input[type="date"]::-webkit-calendar-picker-indicator {
            filter: invert(50%);
        }

        button {
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            padding: 10px 20px;
            color: var(--white);
            border: none;
            border-radius: 5px;
            cursor: pointer;
            outline: none;
            transition: background-color 0.3s ease;
            margin-top: 1rem;
            font-weight: bold;
        }

        .buttons {
            display: flex;
            justify-content: center;
            flex-direction: row;
        }
        
        .send {
            background: var(--green);
        }

        .clear {
            background: var(--yellow);
            margin-left: 0.5rem;
        }
    }

    .modal-close {
        position: absolute;
        top: 30px;
        right: 30px;
        cursor: pointer;
        font-size: 2rem;
    }
`

export default ModalDetails