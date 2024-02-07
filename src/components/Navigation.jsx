import styled from 'styled-components';
import { useState } from 'react'

const Navigation = () => {
    const [hiddenUserMenu, setHiddenUserMenu] = useState(false)

    function handleUserMenu() {
        if (hiddenUserMenu === true) {
            setHiddenUserMenu(false)
        } else {
            setHiddenUserMenu(true)
        }
    }

    return (
        // FIXME: Added a setting style for user with just appears icons

        <SidebarMenuDetails>
            <ul>
                <a href='/dashboard'><img src="/logo.png" alt="Logotipo" /></a>
                <a href='/dashboard'><li><i className="uil uil-chart-growth" /> Central de Relatórios</li></a>
                <a href='/dashboard'><li><i className="uil uil-tag-alt" /> Cadastrar Categorias</li></a>
                <a href='/dashboard'><li><i className="uil uil-plus-circle" /> Adicionar Entrada</li></a>
                <a href='/dashboard'><li><i className="uil uil-minus-circle" /> Adicionar Saída</li></a>
                <a href='/dashboard'><li><i className="uil uil-file-search-alt" /> Gerar PDF</li></a>
                <li><i className="uil uil-signout" /> Logout</li>
            </ul>
            <p>v20240207 - Kindred Software</p>

            <div className="sideMenu">
                {hiddenUserMenu ? (
                    <>
                        <a className="addBtn"><i className="uil uil-plus-circle" /></a>
                        <a className="removeBtn"><i className="uil uil-minus-circle" /></a>
                    </>) : null
                }
                <a className="whatsappBtn"><i className="uil uil-whatsapp" /></a>
                <button className="logoBtn" onClick={handleUserMenu}><i className="uil uil-usd-circle" /></button>
            </div>
        </SidebarMenuDetails>
    )
}

export default Navigation

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
        color: #ccc;
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