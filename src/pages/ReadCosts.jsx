import { useEffect, useState } from "react";
import Navigation from "../components/Navigation"
import authService from "../../services/auth.service";
import postService from "../../services/post.service";
import SidepageDetails from "../components/SidepageDetails"
import getUserNameUntilSpace from "../utils/getUserNameUntilSpace";

const ReadCosts = () => {
    const [render, setRender] = useState(false)
    const [accountName, setAccountName] = useState()
    const [accountId, setAccountId] = useState()

    // eslint-disable-next-line no-unused-vars
    const [financialStatus, setFinancialStatus] = useState(false)

    const date = new Date(); // A data é criada com o formato: ano, mês (0-11), dia
    const dia = date.getDate();
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    const mes = meses[date.getMonth()];
    const [month, setMonth] = useState(mes.toString())

    const ano = date.getFullYear();
    const hora = String(date.getHours()).padStart(2, '0');
    const minutos = String(date.getMinutes()).padStart(2, '0');

    const dataFormatada = `${dia} de ${mes} de ${ano}, agora são ${hora} horas e ${minutos} minutos`;

    async function checkAuth() {
        return await authService.stateAuthentication();
    }

    function SignOut() {
        return authService.signOutGoogle();
    }

    const [Debts, setDebts] = useState([])

    useEffect(() => {
        getDebts()
    }, [])

    const getDebts = async () => {
        const data = await postService.getAllAccount()
        setDebts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    useEffect(() => {
        checkAuth()
            .then(() => {
                authService.stateAuthentication()
                    .then((result) => {
                        if (result) {
                            setRender(true)
                            setAccountName(result.name)
                            setAccountId(result.id)
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
                <Navigation />

                <SidepageDetails>
                    <h1>Olá, {getUserNameUntilSpace(accountName)}!</h1>
                    <p>Hoje é {dataFormatada}</p>
                    <div className="report">
                        <button>Emitir Relatório Financeiro Anual</button>
                        <button>Emitir Relatório Financeiro Mensal</button>
                    </div>

                    <hr />
                    <label htmlFor="">Informe o mês que deseja filtrar em {ano}: </label>
                    <div className="select">
                        <select onChange={event => setMonth(event.target.value)}>
                            <option value="Janeiro">Janeiro</option>
                            <option value="Fevereiro">Fevereiro</option>
                            <option value="Março">Março</option>
                            <option value="Abril">Abril</option>
                            <option value="Maio">Maio</option>
                            <option value="Junho">Junho</option>
                            <option value="Julho">Julho</option>
                            <option value="Agosto">Agosto</option>
                            <option value="Setembro">Setembro</option>
                            <option value="Outubro">Outubro</option>
                            <option value="Novembro">Novembro</option>
                            <option value="Dezembro">Dezembro</option>
                        </select>
                        <button>Filtrar</button>
                    </div>

                    <hr />

                    <h3>Com base nos valores que gastou nesse mês, recomendamos que você&nbsp;
                        {
                            financialStatus ? <span className="green">FIQUE TRANQUILO!</span> : <span className="red">ECONOMIZE!</span>
                        }
                    </h3>

                    <div className="content-debts">
                        <div className="receita">
                            <h4>Receitas de {month} ({ano})</h4>
                            {Debts &&
                                Debts.map((debt, index) => {
                                    if (debt.type === 'Entrada' && accountId === debt.id) {
                                        return (
                                            <p key={index}>
                                                - {debt.date} | R$ {debt.value} | {debt.title} | <span>[DELETAR]</span>
                                            </p>
                                        );
                                    }
                                    return null;
                                })
                            }
                        </div>

                        <div className="border" />
                        <div className="despesa">
                            <h4 className="debts">Despesas de {month} ({ano})</h4>
                            {Debts &&
                                Debts.map((debt, index) => {
                                    if (debt.type === 'Saída' && accountId === debt.id) {
                                        return (
                                            <p key={index}>
                                                - {debt.date} | R$ {debt.value} | {debt.title} | <span>[DELETAR]</span>
                                            </p>
                                        );
                                    }
                                    return null;
                                })
                            }
                        </div>
                    </div>
                </SidepageDetails>
            </div>
        )
    }
}

export default ReadCosts