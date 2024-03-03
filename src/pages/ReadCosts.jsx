import { useEffect, useState } from "react";
import Navigation from "../components/Navigation"
import authService from "../../services/auth.service";
import postService from "../../services/post.service";
import SidepageDetails from "../components/SidepageDetails"
import getUserNameUntilSpace from "../utils/getUserNameUntilSpace";
import getDateAndFormatHim from "../utils/getDateAndFormatHim";
import { toast } from "sonner";

const ReadCosts = () => {
    const [render, setRender] = useState(false)
    const [accountName, setAccountName] = useState('')
    const [accountId, setAccountId] = useState('')
    const [debts, setDebts] = useState([])
    const [originalDebts, setOriginalDebts] = useState([]);
    const [financialStatus, setFinancialStatus] = useState(false)
    const [selectedMonth, setSelectedMonth] = useState(null);

    const date = new Date();
    const dia = date.getDate();
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const mes = meses[date.getMonth()];
    const ano = date.getFullYear();
    const hora = String(date.getHours()).padStart(2, '0');
    const minutos = String(date.getMinutes()).padStart(2, '0');
    const dataFormatada = `${dia} de ${mes} de ${ano}, agora são ${hora} horas e ${minutos} minutos`;

    const checkAuth = async () => {
        return await authService.stateAuthentication();
    }

    const signOut = () => {
        authService.signOutGoogle();
        window.location.href = "/";
    }

    const fetchDebts = async () => {
        const data = await postService.getAllAccount();
        const originalDebts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setOriginalDebts(originalDebts);
        setDebts(originalDebts);
    };

    const getValuesAndReturnToFinancialStatus = () => {
        const filteredDebts = debts.filter(debt => debt.code === accountId && (debt.type === 'Entrada' || debt.type === 'Saída'));

        let totalRevenue = 0;
        let totalExpense = 0;

        filteredDebts.forEach(debt => {
            const valueString = debt.value.replace('R$', '').replace('.', '').replace(',', '.');
            if (debt.type === 'Saída') {
                totalRevenue += parseFloat(valueString);
            } else if (debt.type === 'Entrada') {
                totalExpense += parseFloat(valueString);
            }
        });

        const balance = totalRevenue - totalExpense;

        const isNegative = balance < 0;
        setFinancialStatus(isNegative);
    };

    const deleteDebt = async (id) => {
        await postService.deleteAccount(id);
        toast.success('Anotação excluída com sucesso!');
        fetchDebts();
    }

    useEffect(() => {
        const fetchData = async () => {
            await checkAuth();
            const result = await authService.stateAuthentication();
            if (result) {
                setRender(true)
                setAccountName(result.name)
                setAccountId(result.id)
            } else {
                signOut();
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        fetchDebts();
        getValuesAndReturnToFinancialStatus();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        filterDebtsByMonth();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedMonth]);

    const getFilteredMonth = (event) => {
        setSelectedMonth(parseInt(event.target.value, 10));
    };

    const filterDebtsByMonth = () => {
        if (!selectedMonth) {
            setDebts(originalDebts);
            return;
        }

        const filteredDebts = originalDebts.filter((debt) => {
            const formattedDate = getDateAndFormatHim(debt.date);
            if (formattedDate) {
                const debtDateParts = formattedDate.split('/');
                const month = parseInt(debtDateParts[1], 10);
                return month === selectedMonth;
            } else {
                console.log('Formato de data inválido:', debt.date);
                return false;
            }
        });
        setDebts(filteredDebts);
    };

    return render && (
        <div>
            <Navigation />
            <SidepageDetails>
                <h1>Olá, {getUserNameUntilSpace(accountName)}!</h1>
                <p>Hoje é {dataFormatada}</p>
                <div className="report">
                    <button>Emitir Relatório Financeiro Mensal</button>
                    <button>Emitir Relatório Financeiro Anual</button>
                </div>

                <hr />

                <label htmlFor="">Informe o mês que deseja filtrar de {ano}: </label>
                <div className="select">
                    <select onChange={getFilteredMonth}>
                        <option value="">Selecione o mês</option>
                        {meses.map((month, index) => (
                            <option key={index} value={index + 1}>{month}</option>
                        ))}
                    </select>
                </div>
                <hr />
                <h3>Com base nos valores que gastou nesse mês, recomendamos que você&nbsp;
                    {
                        financialStatus ? <span className="green">FIQUE TRANQUILO!</span> : <span className="red">ECONOMIZE!</span>
                    }
                </h3>
                <div className="content-debts">
                    <div className="receita">
                        <h4>Receitas de {meses[selectedMonth - 1] || mes} ({ano})</h4>
                        <div className="values">
                            {debts && debts.map((debt, index) => {
                                if (debt.type === 'Entrada' && accountId === debt.code) {
                                    return (
                                        <p key={index}>
                                            [<span onClick={() => deleteDebt(debt.id)}>DELETAR</span>] | {getDateAndFormatHim(debt.date)} | {debt.value} | {debt.title}
                                        </p>
                                    );
                                }
                                return null;
                            })
                            }
                        </div>
                    </div>
                    <div className="border" />
                    <div className="despesa">
                        <h4 className="debts">Despesas de {meses[selectedMonth - 1] || mes} ({ano})</h4>
                        <div className="values">
                            {debts && debts.map((debt, index) => {
                                if (debt.type === 'Saída' && accountId === debt.code) {
                                    return (
                                        <p key={index}>
                                            [<span onClick={() => deleteDebt(debt.id)}>DELETAR</span>] | {getDateAndFormatHim(debt.date)} | {debt.value} | {debt.title}
                                        </p>
                                    );
                                }
                                return null;
                            })
                            }
                        </div>
                    </div>
                </div>
            </SidepageDetails>
        </div>
    )
}

export default ReadCosts;
