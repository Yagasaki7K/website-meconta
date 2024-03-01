import { useEffect, useState } from 'react';
import authService from '../../services/auth.service';
import DashboardDetails from '../components/DashboardDetails'
import Navigation from '../components/Navigation'
import { BarChart, YAxis, XAxis, Tooltip, CartesianGrid, Bar } from 'recharts';
import postService from '../../services/post.service'
import LogoMobile from '../components/LogoMobile';

const Dashboard = () => {
    const date = new Date();
    const day = date.getDate();
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const month = meses[date.getMonth()];
    const year = date.getFullYear();
    const hour = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const welcome = hour >= 6 && hour < 12 ? 'Bom dia!' : hour >= 12 && hour < 18 ? 'Boa tarde!' : hour >= 18 && hour <= 23 ? 'Boa noite!' : 'Boa noite!';
    const dataFormatada = `${day} de ${month} de ${year}, agora são ${hour} horas e ${minutes} minutos`;

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

    const getTotalExpense = () => {
        let total = 0;

        debts.forEach(debt => {
            if (debt.type === 'Entrada' && debt.code === accountId) {
                const valueString = debt.value.replace('R$', '').replace('.', '').replace(',', '.');
                total += parseFloat(valueString);
            }
        });

        return total.toFixed(2);
    }
    const getTotalRevenue = () => {
        let total = 0;

        debts.forEach(debt => {
            if (debt.type === 'Saída' && debt.code === accountId) {
                const valueString = debt.value.replace('R$', '').replace('.', '').replace(',', '.');
                total += parseFloat(valueString);
            }
        });

        return total.toFixed(2);
    }

    const generateData = () => {
        const data = [];

        for (let month = 0; month <= 11; month++) {
            let totalExpense = 0;
            let totalRevenue = 0;

            console.log(debts)

            debts.forEach(debt => {
                const debtDate = new Date(debt.date);
                const debtMonth = debtDate.getMonth() + 1;
                const debtYear = debtDate.getFullYear();

                if (debtMonth === month && debtYear === 2024 && debt.code === accountId) {
                    if (debt.type === 'Entrada') {
                        const valueString = debt.value.replace('R$', '').replace('.', '').replace(',', '.');
                        totalExpense += parseFloat(valueString);
                    } else if (debt.type === 'Saída') {
                        const valueString = debt.value.replace('R$', '').replace('.', '').replace(',', '.');
                        totalRevenue += parseFloat(valueString);
                    }
                }
            });

            data.push({
                name: meses[month],
                Receitas: totalExpense.toFixed(2),
                Despesas: totalRevenue.toFixed(2)
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

            if (debtMonth === date.getMonth() && debtYear === date.getFullYear() && debt.type === 'Saída' && debt.code === accountId) {
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
                        <LogoMobile />

                        <h1 className="title"><i className="uil uil-arrow-growth" /> Dashboard</h1>

                        <p className="welcome">{welcome} Hoje é {dataFormatada}.</p>

                        <h4>Total de Entrada em {month}: <span className="receitas">R${getTotalExpense()}</span></h4>
                        <h4 className="despesas">Total de Despesas em {month}: <span className="despesas">R${getTotalRevenue()}</span></h4>

                        <div className="mobile">
                            <p>
                                As funcionalidades no dispositivo móvel são limitadas apenas a adicionar entradas (receitas) e
                                saídas (despesas) de valores, para ver relatórios e graficos, acesse o mesmo endereço pelo
                                computador.
                            </p>

                            <p>
                                Você também pode navegar pelo menu de navegação que criamos para melhorar sua experiência, ele se encontra
                                no rodapé da aplicação.
                            </p>

                            <p>Por ali, você consegue ter acesso ao Inicio, Adicionar Receita e Adicionar Despesas,
                                de uma maneira muito fácil, prática e rápido!
                            </p>

                            <p className="helpMe">Qualquer dúvida, consulte a <a href="/ajuda">Central de Dúvidas</a> ou entre em contato com nosso suporte</p>

                            <div className="buttons">
                                <a href="/entrada" className="button receita">
                                    <i className="uil uil-plus" /> Adicionar Receita
                                </a>
                                <a href="/saida" className="button despesa">
                                    <i className="uil uil-minus" /> Adicionar Despesa
                                </a>
                            </div>
                        </div>

                        <div className="graphs">
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
                    </div>
                </DashboardDetails>
            </div >
        )
    } else {
        return null;
    }
}

export default Dashboard;
