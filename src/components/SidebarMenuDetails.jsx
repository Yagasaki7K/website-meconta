import styled from "styled-components";

const SidebarMenuDetails = styled.div`
    background: var(--background-alt);
    color: #fff;
    width: 20rem;
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 23px 23px;

    a, li, p {
        text-decoration: none;
        color: #fff;
        font-family: 'Poppins', sans-serif;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        width: 100%;

        img {
            width: 15rem;
            margin: 1.5rem 3rem;
        }

        li {
            padding: 1rem 0;
            
            border-bottom: 1px solid var(--background);
            font-size: 1.1rem;

            &:hover {
                background: var(--background);
                cursor: pointer;
                color: var(--green);
            }

            i {
                border: none;
                margin: 0 0.5rem 0 3.5rem;
            }
        }

        :nth-child(2) {
            border-top: 1px solid var(--background);
        }
    }

    p {
        position: absolute;
        bottom: 0;
        margin-bottom: 1rem;
        font-size: 0.8rem;
        color: var(--gray);
        margin-left: 4rem;
    }

    .sideMenu {
        .addBtn, .removeBtn, .whatsappBtn, .logoBtn {
            position: fixed;
            width: 60px;
            height: 60px;
            border-radius: 30px;
            border: none;
            color: var(--white);
            z-index: 20;
            font-size: 1.7rem;
            cursor: pointer;
            transition: 1s;

            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }

        .addBtn:hover, .removeBtn:hover, .whatsappBtn:hover, .logoBtn:hover {
            filter: brightness(70%)
        }

        .addBtn {
            right: 30px;
            bottom: 170px;
            background: var(--green);
        }

        .removeBtn {
            right: 30px;
            bottom: 100px;
            background: var(--red);
        }

        .whatsappBtn {
            right: 100px;
            bottom: 30px;
            background: var(--green);
        }

        .logoBtn {
            right: 30px;
            bottom: 30px;
            background: var(--orange);
        }
    }

`

export default SidebarMenuDetails