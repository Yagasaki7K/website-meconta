import SidebarMenuDetails from './SidebarMenuDetails'
import ModalDetails from './ModalDetails'

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
                <li className='user'><i className="uil uil-user" /> Olá, Anderson</li>
                <a href='/dashboard'><li><i className="uil uil-chart-growth" /> Central de Gráficos</li></a>
                <a href='/dashboard'><li><i className="uil uil-tag-alt" /> Cadastrar Categorias</li></a>
                <a onClick={handleModalAdded}><li ><i className="uil uil-plus-circle" /> Adicionar Entrada</li></a>
                <a onClick={handleModalRemoved}><li><i className="uil uil-minus-circle" /> Adicionar Saída</li></a>
                <a href='/dashboard'><li><i className="uil uil-file-search-alt" /> Lista de Gastos</li></a>
                <li><i className="uil uil-signout" /> Logout</li>
            </ul>
            <div className="footer">
                <p>v20240207 - Kindred Software</p>
            </div>

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
