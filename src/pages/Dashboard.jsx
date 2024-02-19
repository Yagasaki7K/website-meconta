/* eslint-disable no-unused-vars */

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
        name: 'Categoria A',
        Receitas: 4000,
        Despesas: 2400,
    },
    {
        name: 'Categoria B',
        Receitas: 3000,
        Despesas: 1398,
    },
    {
        name: 'Categoria C',
        Receitas: 9800,
        Despesas: 2800,
    },
    {
        name: 'Categoria D',
        Receitas: 2780,
        Despesas: 3908,
    },
    {
        name: 'Categoria E',
        Receitas: 4800,
        Despesas: 1890,
    },
    {
        name: 'Categoria F',
        Receitas: 3890,
        Despesas: 2400,
    },
    {
        name: 'Categoria G',
        Receitas: 3490,
        Despesas: 1300,
    },
];

const Dashboard = () => {
    return (
        <div>
            <Navigation />
            <DashboardDetails>
                <div className="content">
                    <h1 className="title"><i className="uil uil-arrow-growth" /> Dashboard</h1>

                    <h4>Gasto Mensal de {new Date().getFullYear()}</h4>
                    <div className="first-graph">
                        <BarChart width={1270} height={300} data={data}>
                            <XAxis dataKey="name" stroke="var(--white)" />
                            <YAxis />
                            <Tooltip />
                            <CartesianGrid stroke="var(--gray)" strokeDasharray="3 3" />
                            <Bar dataKey="Receitas" fill="var(--green)" barSize={30} />
                            <Bar dataKey="Despesas" fill="var(--red)" barSize={30} />
                        </BarChart>
                    </div>

                    <h4>Média de Gasto por Categoria Mensal</h4>
                    <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                                width={500}
                                height={400}
                                data={datay}
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="Despesas" stackId="1" stroke="var(--purple)" fill="var(--purple)" />
                                <Area type="monotone" dataKey="Receitas" stackId="1" stroke="var(--blue)" fill="var(--blue)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </DashboardDetails>
        </div>
    )
}

export default Dashboard