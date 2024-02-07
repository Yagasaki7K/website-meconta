import styled from 'styled-components';
import { useState } from 'react'

const Navigation = () => {
    const [hiddenUserMenu, setHiddenUserMenu] = useState(false)
    const [isOpenModalAdded, setIsOpenModalAdded] = useState(false)
    const [isOpenModalRemove, setIsOpenModalRemove] = useState(false)

    function handleUserMenu() {
        if (hiddenUserMenu === true) {
            setHiddenUserMenu(false)
        } else {
            setHiddenUserMenu(true)
        }
    }

    function handleModalAdded() {
        if (isOpenModalAdded) {
            setIsOpenModalAdded(false);
        } else {
            setIsOpenModalAdded(true);
        }
    }

    function handleModalRemoved() {
        if (isOpenModalAdded) {
            setIsOpenModalRemove(false);
        } else {
            setIsOpenModalRemove(true);
        }
    }

    return (
        // FIXME: Added a setting style for user with just appears icons

        <SidebarMenuDetails>
            <ul>
                <a href='/dashboard'><img src="/logo.png" alt="Logotipo" /></a>
                <a href='/dashboard'><li><i className="uil uil-chart-growth" /> Central de Relatórios</li></a>
                <a href='/dashboard'><li><i className="uil uil-tag-alt" /> Cadastrar Categorias</li></a>
                <a onClick={handleModalAdded}><li ><i className="uil uil-plus-circle" /> Adicionar Entrada</li></a>
                <a onClick={handleModalRemoved}><li><i className="uil uil-minus-circle" /> Adicionar Saída</li></a>
                <a href='/dashboard'><li><i className="uil uil-file-search-alt" /> Gerar PDF</li></a>
                <li><i className="uil uil-signout" /> Logout</li>
            </ul>
            <p>v20240207 - Kindred Software</p>

            <div className="sideMenu">
                {hiddenUserMenu ? (
                    <>
                        <button className="addBtn" onClick={handleModalAdded}><i className="uil uil-plus-circle" /></button>
                        <button className="removeBtn" onClick={handleModalRemoved}><i className="uil uil-minus-circle" /></button>
                    </>) : null
                }
                <a className="whatsappBtn"><i className="uil uil-whatsapp" /></a>
                <button className="logoBtn" onClick={handleUserMenu}><i className="uil uil-usd-circle" /></button>
            </div>

            {
                isOpenModalAdded ? (
                    <ModalDetails>
                        <div className="modal-close" onClick={() => setIsOpenModalAdded(false)}><i className="uil uil-times-circle" /></div>
                        <div className="modal-content">
                            <h3>Adicionar Entrada</h3>
                            <i>Entrada são valores que entraram na conta</i>

                            <label htmlFor="">Qual é a categoria?</label>
                            <select name="" id="">
                                <option value="">Salário</option>
                                <option value="">Contas à Receber</option>
                                <option value="">Dinheiro Emprestado</option>
                            </select>

                            <label htmlFor="">Informe a data</label>
                            <input type="date" name="" id="" />

                            <label htmlFor="">Informe o valor</label>
                            <input type="text" name="" id="" />

                            <div className="buttons">
                                <button className="send">Enviar</button>
                                <button className="clear">Limpar</button>
                            </div>
                        </div>
                    </ModalDetails>
                ) : null
            }

            {
                isOpenModalRemove ? (
                    <ModalDetails>
                        <div className="modal-close" onClick={() => setIsOpenModalRemove(false)}><i className="uil uil-times-circle" /></div>
                        <div className="modal-content">
                            <h3>Adicionar Saída</h3>
                            <i>Saída são valores que saíram de sua conta</i>

                            <label htmlFor="">Qual é o nome da despesa?</label>
                            <input type="text" />

                            <label htmlFor="">Informe a data</label>
                            <input type="date" name="" id="" />

                            <label htmlFor="">Informe o valor</label>
                            <input type="text" name="" id="" />

                            <label htmlFor="">Qual é a categoria?</label>
                            <select name="" id="">
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>

                            <div className="buttons">
                                <button className="send">Enviar</button>
                                <button className="clear">Limpar</button>
                            </div>

                        </div>
                    </ModalDetails>
                ) : null
            }
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

const ModalDetails = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
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
            color: #ccc;
        }

        label {
            margin-top: 1rem;
        }

        input, select, input[type="date"] {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
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
