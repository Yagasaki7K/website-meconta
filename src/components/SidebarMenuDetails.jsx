import styled from "styled-components";

const SidebarMenuDetails = styled.div`
    background: var(--background-alt);
    color: var(--white);
    width: 20rem;
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 23px 23px;

    @media (max-width: 1024px) {
        background: transparent;
        width: 0.1rem;
        z-index: 2;
    }

    a, li, p {
        text-decoration: none;
        color: var(--black);
        font-family: 'Poppins', sans-serif;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        width: 100%;

        @media (max-width: 1024px) {
            display: none;
        }

        img {
            width: 15rem;
            margin: 1.5rem 3rem;
        }

        h4 {
            margin-left: 3.5rem;
            font-size: 18px;
        }

        .user {
            background: transparent;
            cursor: none;
            color: var(--green);

            &:hover {
                background: transparent;
                filter: brightness(100%);
            }
        }

        li {
            padding: 1rem 0;
            
            border-bottom: 1px solid var(--background);
            font-size: 1.1rem;

            &:hover {
                background: var(--background);
                cursor: pointer;
                color: var(--green);
                transition: 0.5s;
            }

            i {
                border: none;
                margin: 0 0.5rem 0 3.5rem;
            }            
        }

        .active {
                background: var(--background);
                cursor: pointer;
                color: var(--green);
            }

        :nth-child(2) {
            border-top: 1px solid var(--background);
        }
    }

    .footer {
        @media (max-width: 1024px) {
            display: none;
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
        .addBtn, .removeBtn, .helpBtn, .logoBtn, .costsBtn, .homeBtn {
            position: fixed;
            width: 60px;
            height: 60px;
            border-radius: 30px;
            border: none;
            color: #fff;
            z-index: 20;
            font-size: 1.7rem;
            cursor: pointer;
            transition: 1s;

            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }

        .addBtn:hover, .removeBtn:hover, .helpBtn:hover, .logoBtn:hover, .costsBtn:hover, .homeBtn:hover {
            filter: brightness(70%)
        }

        .costsBtn {
            right: 30px;
            bottom: 240px;
            background: var(--purple);

            @media (max-width: 1024px) {
                display: none;
            }
        }

        .homeBtn {
            right: 30px;
            bottom: 240px;
            background: var(--purple);

            @media (max-width: 1024px) {
                right: 20px;
            }
        }

        .addBtn {
            right: 30px;
            bottom: 170px;
            background: var(--green);

            @media (max-width: 1024px) {
                right: 20px;
            }
        }

        .removeBtn {
            right: 30px;
            bottom: 100px;
            background: var(--red);

            @media (max-width: 1024px) {
                right: 20px;
            }
        }

        .helpBtn {
            right: 100px;
            bottom: 30px;
            background: var(--blue);

            @media (max-width: 1024px) {
                right: 90px;
            }
        }

        .logoBtn {
            right: 30px;
            bottom: 30px;
            background: var(--orange);

            @media (max-width: 1024px) {
                right: 20px;
            }
        }
    }

`

export default SidebarMenuDetails