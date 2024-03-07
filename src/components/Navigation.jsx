import authService from '../services/auth.service'
import getUserNameUntilSpace from '../utils/getUserNameUntilSpace'
import SidebarMenuDetails from './SidebarMenuDetails'
import { useEffect, useState } from 'react'
import VersionApp from './VersionApp'

const Navigation = () => {
    const [hiddenUserMenu, setHiddenUserMenu] = useState(false)
    const [accountName, setAccountName] = useState('')

    async function checkAuth() {
        return await authService.stateAuthentication();
    }

    function SignOut() {
        authService.signOutGoogle();
        window.location.href = "/"
    }

    useEffect(() => {
        checkAuth()
            .then(() => {
                authService.stateAuthentication()
                    .then((result) => {
                        if (result) {
                            setAccountName(result.name)
                        } else {
                            SignOut();
                            window.location.href = "/"
                        }
                    });
            })
            .catch(() => {
                window.location.href = "/"
            });
    }, []);

    function handleUserMenu() {
        if (hiddenUserMenu === true) {
            setHiddenUserMenu(false)
        } else {
            setHiddenUserMenu(true)
        }
    }

    function handleModalAdded() {
        window.location.href = "/entrada"
    }

    function handleModalRemoved() {
        window.location.href = "/saida"
    }

    function handleModalCosts() {
        window.location.href = "/gastos"
    }

    function handleModalHome() {
        window.location.href = "/dashboard"
    }

    const slug = window.location.pathname

    // eslint-disable-next-line react/prop-types
    function MenuItem({ slug, path, icon, text }) {
        const isActive = slug === path;
        return (
            <a href={path}>
                <li className={isActive ? 'active' : ''}>
                    <i className={`uil ${icon}`} /> {text}
                </li>
            </a>
        );
    }

    // eslint-disable-next-line react/prop-types
    function Menu({ slug }) {
        return (
            <ul>
                <MenuItem slug={slug} path="/dashboard" icon="uil-chart-pie-alt" text="Central de Gráficos" />
                {/* <MenuItem slug={slug} path="/categorias" icon="uil-tag-alt" text="Cadastrar Categorias" /> */}
                <MenuItem slug={slug} path="/entrada" icon="uil-plus-circle" text="Adicionar Entrada" />
                <MenuItem slug={slug} path="/saida" icon="uil-minus-circle" text="Adicionar Saída" />
                <MenuItem slug={slug} path="/gastos" icon="uil-file-search-alt" text="Relatório de Gastos" />
                <MenuItem slug={slug} path="/ajuda" icon="uil uil-question-circle" text="Central de Dúvidas" />
            </ul>
        );
    }

    return (
        <SidebarMenuDetails>
            <ul>
                <a href='/dashboard'><img src="/logo.png" alt="Logotipo" /></a>
                <a href="/dashboard"><li className='user'><i className="uil uil-user" /> Olá, {getUserNameUntilSpace(accountName)}!</li></a>

                <Menu slug={slug} />
                <li onClick={SignOut}><i className="uil uil-signout" /> Logout</li>
            </ul>
            <div className="footer">
                <VersionApp />
            </div>

            <div className="sideMenu">
                {hiddenUserMenu ? (
                    <>
                        <button className="homeBtn" onClick={handleModalHome}><i className="uil uil-home" /></button>
                        <button className="costsBtn" onClick={handleModalCosts}><i className="uil uil-usd-circle" /></button>
                        <button className="addBtn" onClick={handleModalAdded}><i className="uil uil-plus-circle" /></button>
                        <button className="removeBtn" onClick={handleModalRemoved}><i className="uil uil-minus-circle" /></button>
                    </>) : null
                }
                <a href="/ajuda" className="helpBtn"><i className="uil uil-question-circle" /></a>
                <button className="logoBtn" onClick={handleUserMenu}><i className="uil uil-ellipsis-v" /></button>
            </div>
        </SidebarMenuDetails>
    )
}

export default Navigation
