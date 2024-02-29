/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react';
import authService from '../../services/auth.service';
import DashboardDetails from '../components/DashboardDetails'
import Navigation from '../components/Navigation'
import { BarChart, YAxis, XAxis, Tooltip, CartesianGrid, Bar, ResponsiveContainer, PieChart, Pie, AreaChart, Area } from 'recharts';

const data = [
    { name: 'Janeiro', Receitas: 2400, Despesas: 4000 },
    { name: 'Fevereiro', Receitas: 2400, Despesas: 1600 },
    { name: 'Março', Receitas: 2800, Despesas: 1800 },
    { name: 'Abril', Receitas: 2600, Despesas: 2000 },
    { name: 'Maio', Receitas: '3000', Despesas: 2200 },
    { name: 'Junho', Receitas: 3200, Despesas: 2400 },
    { name: 'Julho', Receitas: 3400, Despesas: 2600 },
    { name: 'Agosto', Receitas: 3600, Despesas: 2800 },
    { name: 'Setembro', Receitas: 3800, Despesas: 3000 },
    { name: 'Outubro', Receitas: 4000, Despesas: 3200 },
    { name: 'Novembro', Receitas: 4200, Despesas: 3400 },
    { name: 'Dezembro', Receitas: 4400, Despesas: 3600 }
];

const datay = [
    {
        name: 'Moradia',
        Receitas: 4000,
        Despesas: 2400,
    },
    {
        name: 'Alimentação',
        Receitas: 3000,
        Despesas: 1398,
    },
    {
        name: 'Transporte',
        Receitas: 9800,
        Despesas: 2800,
    },
    {
        name: 'Saúde',
        Receitas: 2780,
        Despesas: 3908,
    },
    {
        name: 'Educação',
        Receitas: 4800,
        Despesas: 1890,
    },
    {
        name: 'Diversos',
        Receitas: 3890,
        Despesas: 2400,
    },
];


const Dashboard = () => {
    const date = new Date(); // A data é criada com o formato: ano, mês (0-11), dia
    const dia = date.getDate();
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const mes = meses[date.getMonth()];
    const ano = date.getFullYear();
    const hora = String(date.getHours()).padStart(2, '0');
    const minutos = String(date.getMinutes()).padStart(2, '0');
    const saudacao = hora >= 6 && hora < 12 ? 'Bom dia!' : hora >= 12 && hora < 18 ? 'Boa tarde!' : hora >= 18 && hora <= 23 ? 'Boa noite!' : 'Boa noite!';

    const dataFormatada = `${dia} de ${mes} de ${ano}, agora são ${hora} horas e ${minutos} minutos`;

    const [render, setRender] = useState(false)
    const [accountName, setAccountName] = useState('')

    async function checkAuth() {
        return await authService.stateAuthentication();
    }

    function SignOut() {
        return authService.signOutGoogle();
    }

    useEffect(() => {
        checkAuth()
            .then(() => {
                authService.stateAuthentication()
                    .then((result) => {
                        if (result) {
                            setRender(true)
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

    if (render) {
        return (
            <div>
                <Navigation name={accountName} />
                <DashboardDetails>
                    <div className="content">
                        <h1 className="title"><i className="uil uil-arrow-growth" /> Dashboard</h1>

                        <p>{saudacao}  Hoje é {dataFormatada}.</p>

                        <h4>Gasto Mensal de {new Date().getFullYear()}</h4>
                        <i className="advice">O gráfico é baseado no valor total de despesas e receitas no mês relacionado.</i>
                        <div className="first-graph">
                            <BarChart width={1300} height={300} data={data}>
                                <XAxis dataKey="name" stroke="var(--white)" />
                                <YAxis stroke="var(--white)" />
                                <Tooltip />
                                <CartesianGrid stroke="var(--gray)" strokeDasharray="3 3" />
                                <Bar dataKey="Receitas" fill="var(--green)" barSize={30} />
                                <Bar dataKey="Despesas" fill="var(--red)" barSize={30} />
                            </BarChart>
                        </div>

                        <h4>Média de Gasto por Categoria Mensal</h4>
                        <i className="advice">Iremos mostrar apenas as primeiras sete categorias cadastradas. Veja o relatório completo no Relatório de Gastos</i>
                        <div style={{ width: 1300, height: 300 }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart width={500} height={400} data={datay} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" stroke="var(--white)" />
                                    <YAxis stroke="var(--white)" />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="Despesas" stackId="1" stroke="var(--red)" fill="var(--red)" />
                                    <Area type="monotone" dataKey="Receitas" stackId="1" stroke="var(--green)" fill="var(--green)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </DashboardDetails>
            </div>
        )
    }
}

export default Dashboard