import styled from "styled-components";

const ModalDetails = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-content {
        background: var(--background);
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        max-width: 80%; 
        max-height: 80%;
        overflow-y: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;

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

        input, select, input[type="date"] {
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
            padding: 6px;
            border: 1px solid var(--white);
            border-radius: 5px;
            outline: none;
            transition: border-color 0.3s ease;
            background: var(--background);
            color: var(--white);
        }

        option {
            text-align: center;
        }

        input:focus, select:focus, input[type="date"]:focus {
            border-color: var(--white);
        }

        input.error, select.error, input[type="date"].error {
            border-color: var(--red);
        }

        input[type="date"]::-webkit-calendar-picker-indicator {
            filter: invert(50%);
        }

        button {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            font-size: 14px;
            padding: 10px 20px;
            color: #fff;
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
            flex-direction: row;
        }
        
        .send {
            background: var(--green);
        }

        .clear {
            background: var(--orange);
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