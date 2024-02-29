import { useEffect, useState } from 'react';
import authService from '../../services/auth.service';
import DashboardDetails from '../components/DashboardDetails'
import Navigation from '../components/Navigation'
import { BarChart, YAxis, XAxis, Tooltip, CartesianGrid, Bar } from 'recharts';
import postService from '../../services/post.service'

const Dashboard = () => {
    const date = new Date();
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
    const [accountId, setAccountId] = useState('')
    const [debts, setDebts] = useState([])

    async function checkAuth() {
        return await authService.stateAuthentication();
    }

    function SignOut() {
        return authService.signOutGoogle();
    }

    const fetchDebts = async () => {
        const data = await postService.getAllAccount();
        const originalDebts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setDebts(originalDebts);
    };

    const generateData = () => {
        const data = [];

        for (let month = 1; month <= 12; month++) {
            let totalReceitas = 0;
            let totalDespesas = 0;

            debts.forEach(debt => {
                const debtDate = new Date(debt.date);
                const debtMonth = debtDate.getMonth() + 1;
                const debtYear = debtDate.getFullYear();

                if (debtMonth === month && debtYear === 2024 && debt.code === accountId) {
                    if (debt.type === 'Entrada') {
                        const valueString = debt.value.replace('R$', '').replace('.', '').replace(',', '.');
                        totalReceitas += parseFloat(valueString);
                    } else if (debt.type === 'Saída') {
                        const valueString = debt.value.replace('R$', '').replace('.', '').replace(',', '.');
                        totalDespesas += parseFloat(valueString);
                    }
                }
            });

            data.push({
                name: getMonthName(month),
                Receitas: totalReceitas.toFixed(2),
                Despesas: totalDespesas.toFixed(2)
            });
        }

        return data;
    };

    const generateCategoryData = () => {
        const data = [];
        const categories = {};

        debts.forEach(debt => {
            const debtDate = new Date(debt.date);
            const debtMonth = debtDate.getMonth() + 1;
            const debtYear = debtDate.getFullYear();

            if (debtMonth === date.getMonth() + 1 && debtYear === date.getFullYear() && debt.type === 'Saída' && debt.code === accountId) {
                if (!categories[debt.category]) {
                    categories[debt.category] = 0;
                }

                const valueString = debt.value.replace('R$', '').replace('.', '').replace(',', '.');
                categories[debt.category] += parseFloat(valueString);
            }
        });

        Object.keys(categories).forEach(category => {
            data.push({
                name: category,
                Despesas: categories[category].toFixed(2)
            });
        });

        return data;
    };


    const getMonthName = (monthNumber) => {
        const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        return monthNames[monthNumber - 1];
    };

    useEffect(() => {
        checkAuth()
            .then(() => {
                authService.stateAuthentication()
                    .then((result) => {
                        if (result) {
                            setRender(true)
                            setAccountName(result.name)
                            setAccountId(result.id)
                            fetchDebts()
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

                        <p>{saudacao} Hoje é {dataFormatada}.</p>

                        <h4>Gasto Mensal de {new Date().getFullYear()}</h4>
                        <i className="advice">O gráfico é baseado no valor total de despesas e receitas no mês relacionado.</i>
                        <div className="first-graph">
                            <BarChart width={1300} height={300} data={generateData()}>
                                <XAxis dataKey="name" stroke="var(--white)" />
                                <YAxis stroke="var(--white)" />
                                <Tooltip />
                                <CartesianGrid stroke="var(--gray)" strokeDasharray="3 3" />
                                <Bar dataKey="Receitas" fill="var(--green)" barSize={30} />
                                <Bar dataKey="Despesas" fill="var(--red)" barSize={30} />
                            </BarChart>
                        </div>

                        <h4>Média de Gasto por Categoria Mensal</h4>
                        <i className="advice">Iremos mostrar apenas as categorias cadastradas. Veja o relatório completo no Relatório de Gastos</i>
                        <div className="first-graph">
                            <BarChart width={1300} height={300} data={generateCategoryData()}>
                                <XAxis dataKey="name" stroke="var(--white)" />
                                <YAxis stroke="var(--white)" />
                                <Tooltip />
                                <CartesianGrid stroke="var(--gray)" strokeDasharray="3 3" />
                                <Bar dataKey="Despesas" fill="var(--red)" barSize={30} />
                            </BarChart>
                        </div>
                    </div>
                </DashboardDetails>
            </div >
        )
    } else {
        return null;
    }
}

export default Dashboard;
